"use strict";

const Mail = sequelize.define("mail", {
	id: {
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	accountId: Sequelize.INTEGER,
	code: Sequelize.STRING
}, {
	freezeTableName: true,
	timestamps: false
});

exports.countById = accountId =>
	Mail.count({
		where: { accountId }
	})