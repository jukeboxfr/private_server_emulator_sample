const Router = require("koa-router");
const { createApiKey,
		createToken } = require("../controllers/login.js");

const route = new Router();

route.post("/CreateApiKey", createApiKey);
route.get("/CreateToken", createToken);

module.exports = route;