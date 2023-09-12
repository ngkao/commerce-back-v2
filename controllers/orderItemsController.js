const knex = require("knex")(require("../knexfile"));

exports.getOrderItems = (req, res) => {
  knex
    .select(
      "order_items.order_id as order_id",
      "orders.created_at as order_date",
      "orders.customer_email as customer_email",
      "orders.customer_name as customer_name",
      knex.raw("CAST(total_amount AS CHAR) AS total_sale_amount"),
      knex.raw("sum(order_items.quantity) as total_quantity"),
      knex.raw(
        "sum(order_items.quantity * products.purchase_price) as total_purchase_amount"
      )
    )
    .from("order_items")
    .join("orders", "order_items.order_id", "=", "orders.id")
    .join("products", "order_items.product_id", "=", "products.id")
    .groupBy(
      "order_items.order_id",
      "orders.created_at",
      "orders.customer_email",
      "orders.customer_name",
      "orders.total_amount"
    )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving products ${err}`));
};
