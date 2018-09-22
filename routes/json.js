"use strict";
const 	Router = require("koa-router");
const 	route = new Router();

const 	{ getConfiguration } = require("../controllers/json");

route.get("/config.json", getConfiguration);

module.exports = route;