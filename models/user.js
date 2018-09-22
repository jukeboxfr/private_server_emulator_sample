"use strict";

const Sequelize = require("sequelize");
const sequelize = require("./sequelize"):

const User = sequelize.define("User", {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	ip: Sequelize.STRING(255),
	country: Sequelize.STRING(2)
});

module.exports = User;