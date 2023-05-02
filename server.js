const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')
const timestampRoutes = require('./routes/timestamp')
const orderItemsRoutes = require('./routes/orderItems')
const app = express();
const knex = require("knex")(require("./knexfile"));
const { v4: uuid } = require("uuid");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const bodyParser = require('body-parser');

const CLIENT_URL = process.env.CLIENT_URL;
const STRIPE_SECRET = process.env.STRIPE_SECRET;
const PORT = process.env.PORT;


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json({
    verify: function(req,res,buf) {
        var url = req.originalUrl;
        if (url.startsWith('/webhook')) {
            req.rawBody = buf.toString()
        }
    }
}));


app.use(cors({
    origin: CLIENT_URL
  }));

// app.use(express.json({
//     limit: '5mb',
//     verify: (req, res, buf) => {
//       req.rawBody = buf.toString();
//     }
// }));


// GET Request Products
app.use('/products', productRoutes);
//GET Request Orders
app.use('/orders', orderRoutes);
//GET Request Latest Timestamp
app.use('/timestamp', timestampRoutes);
//GET Request Order Items
app.use('/items', orderItemsRoutes);


//Stripe
let stripeStoreItems = new Map();
knex
    .select("*")
    .from("products")
    .then((data) => {
        stripeStoreItems = new Map(data.map((item) => 
            [
                item.id, {priceInCents: item.sale_price*100, name: item.product_name}
            ]    
        ));
        console.log("Stripe Object Outside",stripeStoreItems)
    })

app.post("/create-checkout-session", async (req,res) => {
    knex
        .select("*")
        .from("products")
        .then((data) => {
            stripeStoreItems = new Map(data.map((item) => 
                [
                    item.id, {priceInCents: item.sale_price*100, name: item.product_name}
                ]    
            ));
        })
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = stripeStoreItems.get(item.id)

                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                            // description: storeItem.name,
                            // images: [storeItem.image],
                            metadata: {
                                product_id: item.id,
                            },
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `https://ngkao.dev/snack/success`,
            // success_url: `https://img.freepik.com/premium-vector/success-payment-icon-flat-style-approved-money-vector-illustration-isolated-background-successful-pay-sign-business-concept_157943-1354.jpg?w=2000`,
            // success_url: `https://i.ibb.co/KFM2k9k/frame-2.png`,
            cancel_url: `${process.env.CLIENT_URL}/failure`,

        })
        res.json({url: session.url})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
})

const endpointSecret = `${STRIPE_SECRET}`;



app.post('/webhook', async (req, res) => { 

  const payload = req.body;
  const sig = req.headers['stripe-signature'];

  console.log(`Received stripe-signature header: ${req.headers['stripe-signature']}`);
  console.log(`sig variable value: ${sig}`);
  console.log(`req.rawBody ${req.rawBody}`)
  console.log(`payload ${payload}`)

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.log("Error Message",err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  console.log(`Received event type: ${event.type}`);

if (event.type === 'checkout.session.completed') {

    const session = event.data.object;
    if (!session) {
      console.error('No session found in webhook event data');
      return res.status(400).end();
    }

    const sessionWithLineItems = await stripe.checkout.sessions.retrieve( 
        session.id,
        {
        expand: ['line_items','line_items.data.price.product'],
        }
    );
    const lineItems = sessionWithLineItems.line_items;

    if(payload.data.object !== undefined) {
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
    console.log("orderData",orderData)

    let order_id;

    knex('orders')
    .select('id')
        .then(result => {
        const data = result.map(obj => ({
            ...obj,
            id: parseInt(obj.id)
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
                total_amount: orderData.amount_total/100
            }

            console.log("New Order",newOrder)
            knex("orders")
            .insert(newOrder)
            .then((data) => {
                console.log("201 POST")
            })
            .catch((err) => console.log(`Error creating Inventory: ${err}`))


            // order_items
            const newOrderItem = (lineItems.data).map((item) => ({
                id: uuid(),
                product_id: item.price.product.metadata.product_id, // this is product_id
                order_id,
                quantity: item.quantity
            }))
            console.log("ItemOrder", newOrderItem)
  
            for (let i = 0; i < newOrderItem.length; i++) {
                let  itemObj = newOrderItem[i];
                let currentInv = "";
                //Getting Current Inv Count and Updating 
                knex("products")
                .select("quantity")
                .where({id: itemObj.product_id})
                .then((data) => {
                    currentInv = data[0].quantity;
                    return knex("products")
                    .where({ id: itemObj.product_id })
                    .update({ quantity: currentInv - itemObj.quantity })
                })
                .then((data) => {
                    console.log("Updated Inv", data)
                })
                .catch((err) => console.log(err))
            }
            
            // Posting Order_Items in Database
            knex("order_items")
                .insert(newOrderItem)
                .then((data) => {
                    console.log("201 POST")
                })
                .catch((err) => console.log(`Error creating Inventory: ${err}`))
            })

        .catch(error => {
            console.error(error);
        })

    }

// app.listen(8080, () => {
//     console.log('Server has started');
// })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server has started ${PORT}`);
})