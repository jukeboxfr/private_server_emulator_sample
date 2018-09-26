"use strict";
import Sequelize from "sequelize";
import sequelize from "./sequelize";

const Ban = sequelize.define("ban", {
	id: {
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	accountId: Sequelize.INTEGER,
	reason: Sequelize.STRING
}, {
	timestamps: false
});

exports.countById = accountId =>
	Ban.count({
		where: { accountId }
	})