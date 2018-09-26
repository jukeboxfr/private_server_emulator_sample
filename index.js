"use strict";

import Koa from "koa";
import serve from "koa-static";
import cors from "koa-cors";
import json from "koa-json";
import bodyParser from "koa-body";
import statuses from "statuses";
import settings from "./settings";
import router from "./routes";

const app = new Koa();

app.statuses = Object.assign(statuses, { 
	601: "Bad Credentials",
	603: "ApiAuth Failed"
});

app.use(json({ pretty: false, param: 'pretty' }));
app.use(cors());
app.use(bodyParser());
app.use(serve("static"));
app.use(router.routes());

app.listen(settings.http.port);