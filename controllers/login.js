"use strict";
const { generateRandomKey, generateRandomToken } = require("../utils/random.js");


const 	createApiKey = async ctx => {
	ctx.body = "Create API Key";
};

const 	createToken = async ctx => {
	ctx.body = "Create Token";
};


module.exports = {
	createApiKey,
	createToken
};