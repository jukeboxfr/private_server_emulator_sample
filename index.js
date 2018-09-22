"use strict";
const 	Koa  = require("koa");
const 	cors = require("koa-cors");
const 	json = require("koa-json");

const { server } = require("./confs/settings");

const 	router = require("./routes");

const app = new Koa();

app.use(json({ pretty: false, param: 'pretty' }));
app.use(cors());

app.use(router.routes());
app.listen(server.port);