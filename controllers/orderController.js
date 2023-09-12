const knex = require("knex")(require("../knexfile"));

exports.getOrders = (req, res) => {
  knex
    .select(
      "orders.id as order_id",
      "orders.created_at as order_date",
      "orders.customer_email as customer_email",
      "orders.customer_name as customer_name",
      "orders.total_amount as total_order_amount",
      "sum_order_items.quantity as total_quantity",
      knex.raw(
        "sum(order_items.quantity * products.purchase_price) as total_purchase_amount"
      )
    )
    .from("orders")
    .join(
      knex
        .select("order_id", knex.raw("sum(quantity) as quantity"))
        .from("order_items")
        .groupBy("order_id")
        .as("sum_order_items"),
      "sum_order_items.order_id",
      "=",
      "orders.id"
    )
    .join("order_items", "order_items.order_id", "=", "orders.id")
    .join("products", "products.id", "=", "order_items.product_id")
    .groupBy("orders.id", "sum_order_items.quantity")
    .orderBy("orders.created_at", "desc")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving products ${err}`));
};

exports.getById = (req, res) => {
  knex
    // .select("*")
    .select(
      "orders.id as order_id",
      "order_items.id as order_item_id",
      "products.id as product_id",
      "products.product_name as product_name",
      "products.sale_price as product_sale_price",
      "products.description as product_description",
      "products.category as product_category",
      "products.purchase_price as product_purchase_price",
      "order_items.quantity as quantity"
    )
    .from("orders", "products")
    // .orderBy('created_at', 'desc')
    .join("order_items", "order_items.order_id", "orders.id")
    .join("products", "products.id", "=", "order_items.product_id")
    // .join("products", "products.id", "product_id");
    .where({ "orders.id": req.params.id })

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving products ${err}`));
};
