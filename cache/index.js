"use strict";
const 	Redis    = require("ioredis");
const { 
	port,
	host, 
	family, 
	password, 
	db } = require("../confs/settings");
const 	{ randomString } = require("../utils/random");


const 	redis = new Redis({
	port,
	host,
	family,
	password,
	db,
});

const 	createSession = language => {
	const 	id = randomString(16);

	redis.hset("sessions", id, JSON.stringify({ language }));
	return (id);
};

const 	createToken = () => {

};

const 	createApiKey = () => {

};


module.exports = { 
	createSession,
	createApiKey,
	createToken
};