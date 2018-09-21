"use strict";
const 	Koa  = require("koa");
const 	cors = require("koa-cors");
const 	fs   = require("fs");
const   config = require("./config.js");
const 	loginRouter = require("./routes/login");

process.env.NODE_ENV = ();

const app = new Koa();

app.use(cors());

app.use(loginRouter.routes());
app.listen(server.port);