const { Sequelize } = require('sequelize');
require('dotenv').config();
let connection;
if(process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL)
} else {
  connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
    },
  );
}

module.exports = connection;
