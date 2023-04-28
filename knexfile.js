require("dotenv").config();
// Update with your config settings.

// const { DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE } = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
