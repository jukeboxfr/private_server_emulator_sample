"use strict";
const Router = require("koa-router");
const { getApiKey,
		getToken } = require("../controllers/login.js");

const route = new Router();

route.post("/CreateApiKey", getApiKey);
route.get("/CreateToken", getToken);

module.exports = route;