const Sequelize = require('sequelize');
const configDB = require ('../config/db_connection');

const connection = new Sequelize(configDB);

module.exports = connection;