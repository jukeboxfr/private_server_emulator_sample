"use strict";
import Router from "koa-router";
import Api from "./api";

const	route 		= new Router();

route.use("/api", Api.routes());

export default route;