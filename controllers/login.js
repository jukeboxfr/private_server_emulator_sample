"use strict";
const 	{ createApiKey, createToken } = require("../cache");

const 	getApiKey = async ctx => {
	ctx.body = "Create API Key";
};

const 	getToken = async ctx => {
	ctx.body = "Create Token";
};


module.exports = {
	getApiKey,
	getToken
};