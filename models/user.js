"use strict";

const Sequelize = require("sequelize");

const User = sequelize.define("User", {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

module.exports = User;