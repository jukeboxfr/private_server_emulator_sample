const 	Router 		= require("koa-router");

const 	jsonRouter  = require("./json");
const 	loginRouter = require("./login");

const	route 		= new Router();
route.use("/json", jsonRouter.routes());
route.use("/login", loginRouter.routes());

module.exports = route;