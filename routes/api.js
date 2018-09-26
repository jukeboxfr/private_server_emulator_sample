"use strict";
import Router from "koa-router";
import querystring from "querystring";

import configuration from "../controllers/api/configuration";
import createApiKey from "../controllers/api/createApiKey";
import createToken from "../controllers/api/createToken";
import validateGuest from "../controllers/api/validateGuest";

const route = new Router();

route.post("/CreateApiKey", async (ctx, next) => {
	try 
	{
		await next();
	}
	catch(e)
	{
		const reason = e.reason;

		console.log("Status code:", e.status, "Reason:", e.reason);

		ctx.status = e.status || 500;
		ctx.body = { reason };
	}
});

route.post("/CreateApiKey", createApiKey.checkParameters);
route.post("/CreateApiKey", createApiKey.checkAccount);
route.post("/CreateApiKey", createApiKey.checkBlacklist);
route.post("/CreateApiKey", createApiKey.getApiKey);

route.get("/CreateToken", createToken.getToken);

route.get("/validateGuest", validateGuest);

route.get("/configuration", configuration.getConfiguration);

export default route;