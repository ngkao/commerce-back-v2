const knex = require("knex")(require("../knexfile"));

exports.getOrderTimestamp = (req, res) => {
  knex
    .select("created_at", "customer_name")
    .from("orders")
    .orderBy("created_at", "desc")
    .then((data) => {
      const latestTimestamp = data[0];
      res.status(200).json(latestTimestamp);
    })
    .catch((err) => res.status(400).send(`Error retrieving products ${err}`));
};
