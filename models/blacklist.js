"use strict";
import Sequelize from "sequelize";
import sequelize from "./sequelize";

const Blacklist = sequelize.define("blacklist", {
	id: {
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	ip: Sequelize.STRING(255)
}, {
	freezeTableName: true,
	timestamps: false
});

exports.countByIp = ip =>
	Blacklist.count({
		where: { ip }
	})