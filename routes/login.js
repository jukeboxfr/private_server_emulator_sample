const Router = require("koa-router");
const { createApiKey,
		createToken } = require("../controllers/login.js");

const login  = new Router();
const router = new Router();

route.post("/CreateApiKey", CreateApiKey);
route.get("/CreateToken", CreateToken);

login.use("/login", router.routes(), router.allowedMethods());

module.exports = login;