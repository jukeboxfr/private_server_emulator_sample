"use strict";
import Sequelize from "sequelize";
import sequelize from "./sequelize";

const User = sequelize.define("user", {
	id: {
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	active: Sequelize.INTEGER,
	ip: Sequelize.STRING(255),
	country: Sequelize.STRING(2)
}, {
	timestamps: false
});

exports.getByUsername = async username => 
	await User.findOne({ where: { username }})

