"use strict";
const 	Sequelize = require("sequelize");
const 	{ database } = require("../config.js");

const 	sequelize = new Sequelize(database.name, database.user, database.password, {
  host: database.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

module.exports = sequelize;