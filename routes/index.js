const 	Router 		= require("koa-router");

const 	loginRouter = require("./login");

const	{ getConfiguration } = require("../controllers/config");

const	route 		= new Router();


route.get("/config.json", getConfiguration);
route.use("/login", loginRouter.routes());

module.exports = route;