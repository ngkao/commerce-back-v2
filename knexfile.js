require("dotenv").config();
// Update with your config settings.

const { DB_HOST, DB_LOCAL_USER, DB_LOCAL_PASSWORD, DB_LOCAL_DBNAME } = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  connection: {
    host: DB_HOST,
    user: DB_LOCAL_USER,
    password: DB_LOCAL_PASSWORD,
    database: DB_LOCAL_DBNAME,
  },
};
