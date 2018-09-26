"use strict";
import Sequelize from "sequelize";
import settings  from "../settings.json";

const 	sequelize = new Sequelize(settings.mysql.name, settings.mysql.user, settings.mysql.password, {
  host: settings.mysql.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

export default sequelize;