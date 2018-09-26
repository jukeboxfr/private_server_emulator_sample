"use strict";
import Redis from "ioredis";
import settings from "../settings.json";

const { port, host , family, password, db } = settings.redis;
const 	redis = new Redis({
	port,
	host,
	family,
	password,
	db,
});

export default redis;