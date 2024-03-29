const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const timestampRoutes = require("./routes/timestamp");
const orderItemsRoutes = require("./routes/orderItems");
const app = express();
const knex = require("knex")(require("./knexfile"));
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const bodyParser = require("body-parser");
const NodeCache = require("node-cache");

const CLIENT_URL = process.env.CLIENT_URL;
const STRIPE_SECRET = process.env.STRIPE_SECRET;
const PORT = process.env.PORT;

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);

const cache = new NodeCache({
  stdTTL: 60,
  checkperiod: 120,
  useClones: false,
});

const timestampCache = new NodeCache({
  stdTTL: 30,
  checkperiod: 60,
  useClones: false,
  ttl: 2,
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      var url = req.originalUrl;
      if (url.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.use(
  cors({
    origin: CLIENT_URL,
  })
);

// GET Request Products with cache
app.use(
  "/products",
  (req, res, next) => {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedData = cache.get(key);
    if (cachedData) {
      console.log("serving from cache /products");
      res.send(cachedData);
      return;
    } else {
      const originalSend = res.send;
      res.send = function (data) {
        cache.set(key, data);
        originalSend.apply(res, arguments);
      };
      next();
    }
  },
  productRoutes
);

//GET Request Orders with cache
app.use(
  "/orders",
  (req, res, next) => {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedData = cache.get(key);
    if (cachedData) {
      console.log("serving from cache /orders");
      res.send(cachedData);
      return;
    } else {
      const originalSend = res.send;
      res.send = function (data) {
        cache.set(key, data);
        originalSend.apply(res, arguments);
      };
      next();
    }
  },
  orderRoutes
);

// //GET Request Latest Timestamp with cache
app.use(
  "/timestamp",
  (req, res, next) => {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedData = timestampCache.get(key);
    if (cachedData) {
      console.log("serving from cache /timestamp");
      res.send(cachedData);
      return;
    } else {
      const originalSend = res.send;
      res.send = function (data) {
        cache.set(key, data);
        originalSend.apply(res, arguments);
      };
      next();
    }
  },
  timestampRoutes
);

//GET Request Order Items with cache
app.use(
  "/items",
  (req, res, next) => {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedData = cache.get(key);
    if (cachedData) {
      console.log("serving from cache /items");
      res.send(cachedData);
      return;
    } else {
      const originalSend = res.send;
      res.send = function (data) {
        cache.set(key, data);
        originalSend.apply(res, arguments);
      };
      next();
    }
  },
  orderItemsRoutes
);

//Stripe
let stripeStoreItems = new Map();
knex
  .select("*")
  .from("products")
  .then((data) => {
    stripeStoreItems = new Map(
      data.map((item) => [
        item.id,
        { priceInCents: item.sale_price * 100, name: item.product_name },
      ])
    );
    console.log("Stripe Object Outside", stripeStoreItems);
  });

app.post("/create-checkout-session", async (req, res) => {
  knex
    .select("*")
    .from("products")
    .then((data) => {
      stripeStoreItems = new Map(
        data.map((item) => [
          item.id,
          { priceInCents: item.sale_price * 100, name: item.product_name },
        ])
      );
    });
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = stripeStoreItems.get(item.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
              metadata: {
                product_id: item.id,
              },
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `https://silver-cassata-a2e8fc.netlify.app/`,
      cancel_url: `${process.env.CLIENT_URL}/failure`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const endpointSecret = `${STRIPE_SECRET}`;

app.post("/webhook", async (req, res) => {
  const payload = req.body;
  const sig = req.headers["stripe-signature"];

  console.log(
    `Received stripe-signature header: ${req.headers["stripe-signature"]}`
  );
  console.log(`sig variable value: ${sig}`);
  console.log(`req.rawBody ${req.rawBody}`);
  console.log(`payload ${payload}`);

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.log("Error Message", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  console.log(`Received event type: ${event.type}`);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (!session) {
      console.error("No session found in webhook event data");
      return res.status(400).end();
    }

    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      session.id,
      {
        expand: ["line_items", "line_items.data.price.product"],
      }
    );
    const lineItems = sessionWithLineItems.line_items;

    if (payload.data.object !== undefined) {
      const orderData = payload.data.object;
      fulfillOrder(lineItems, orderData);
    }
  }
  res.status(200).end();
});

const fulfillOrder = (lineItems, orderData) => {
  console.log("Fulfilling order", lineItems);
  console.log("Price Object in LineItems", lineItems.data[0].price);
  console.log("Metadata Object in LineItems", lineItems.data[0].price.metadata);
  console.log("orderData", orderData);

  let order_id;

  knex("orders")
    .select("id")
    .then((result) => {
      const data = result.map((obj) => ({
        ...obj,
        id: parseInt(obj.id),
      }));

      const highestId = data.reduce((acc, obj) => {
        return obj.id > acc ? obj.id : acc;
      }, 0);

      const nextId = parseInt(highestId) + 1;
      order_id = nextId.toString();

      //order
      const newOrder = {
        id: order_id,
        customer_email: orderData.customer_details.email,
        customer_name: orderData.customer_details.name,
        total_amount: orderData.amount_total / 100,
      };

      console.log("New Order", newOrder);
      knex("orders")
        .insert(newOrder)
        .then((data) => {
          console.log("201 POST");
        })
        .catch((err) => console.log(`Error creating Inventory: ${err}`));

      //order_items
      knex("order_items")
        .select("id")
        .then((orderIds) => {
          const orderIdData = orderIds.map((orderItemObj) => ({
            ...orderItemObj,
            id: parseInt(orderItemObj.id),
          }));

          const highestId = orderIdData.reduce((acc, orderItemObj) => {
            return orderItemObj.id > acc ? orderItemObj.id : acc;
          }, 0);

          const nextItemId = parseInt(highestId) + 1;
          order_item_id = nextItemId.toString();

          // creating order_items
          const newOrderItem = lineItems.data.map((item) => ({
            id: order_item_id,
            product_id: item.price.product.metadata.product_id, // this is product_id
            order_id,
            quantity: item.quantity,
          }));
          console.log("ItemOrder", newOrderItem);

          for (let i = 0; i < newOrderItem.length; i++) {
            let itemObj = newOrderItem[i];
            let currentInv = "";
            //Getting Current Inv Count and Updating
            knex("products")
              .select("quantity")
              .where({ id: itemObj.product_id })
              .then((data) => {
                currentInv = data[0].quantity;
                return knex("products")
                  .where({ id: itemObj.product_id })
                  .update({ quantity: currentInv - itemObj.quantity });
              })
              .then((data) => {
                console.log("Updated Inv", data);
              })
              .catch((err) => console.log(err));
          }

          // Posting Order_Items in Database
          knex("order_items")
            .insert(newOrderItem)
            .then((data) => {
              console.log("201 POST");
            })
            .catch((err) => console.log(`Error creating Inventory: ${err}`));
        });
    })

    .catch((error) => {
      console.error(error);
    });
};

app.listen(process.env.PORT || PORT || 8080, () => {
  console.log(`Server has started ${PORT}`);
});
