const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");

exports.getProducts = (req, res) => {
    knex
        .select("*")
        .from("products")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retrieving products ${err}`))
}

exports.addProduct = (req, res) => {
    if (
        !req.body.product_name ||
        !req.body.description ||
        !req.body.category ||
        !req.body.status ||
        !req.body.quantity ||
        !req.body.sale_price ||
        !req.body.purchase_price
      ) {
        return res
          .status(400)
          .send("Please make sure to provide all required fields in a request");
      }


    const id = uuid();
    const newProductObj = req.body;
    const addProductObj = {
      id,
      ...newProductObj,
    };

    knex("products")
        .insert(addProductObj)
        .then ((data) => {
            const newProductURL = `/products/${id}`;
            res.status(201).location(newProductURL).send();
          })
          .catch((err) => res.status(400).send(`Error creating Inventory: ${err}`));
}

exports.getProductsSold = (req, res) => {
  knex
      .select(
        'products.id as product_id',
        'products.category as product_category',
        'products.product_name as product_name',
        'products.quantity as available_quantity',
        'products.sale_price as sale_price',
        'products.purchase_price as purchase_price',
        'products.image_url as image_url',
        knex.raw('CAST(sum(order_items.quantity) AS UNSIGNED INTEGER) as sold_quantity'),

      )
      .from("products")
      .join('order_items','products.id', '=', 'order_items.product_id')
      .groupBy('products.id')
      .then((data) => {
          res.status(200).json(data);
      })
      .catch((err) => res.status(400).send(`Error retrieving products ${err}`))
}