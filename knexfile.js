require("dotenv").config();
// Update with your config settings.

const { DB_HOST, DB_LOCAL_USER, DB_LOCAL_PASSWORD, DB_LOCAL_DBNAME } = process.env
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

// old

// module.exports = {
//   development: {
//     client: "mysql2",
//     connection: {
//       host: DB_HOST,
//       user: DB_LOCAL_USER,
//       password: DB_LOCAL_PASSWORD,
//       database: DB_LOCAL_DBNAME,
//     },
//   },
//   // production: {
//   //   client: "pg",
//   //   connection: DB_URL,
//   // }

// };

// module.exports = {
//   client: "mysql",
//   connection: {
//     // host: DB_HOST,
//     host: "r4wkv4apxn9btls2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: DB_LOCAL_USER,
//     password: DB_LOCAL_PASSWORD,
//     database: DB_LOCAL_DBNAME,
//   },
// };