"use strict";
import querystring from "querystring";
import bcrypt from "bcryptjs";
import uuid from "uuid/v1";
import redis from "../../redis";
import User from "../../models/user";
import Blacklist from "../../models/blacklist";
import Ban from "../../models/ban";

class LoginError extends Error 
{
	constructor(reason, ...params)
	{
		super(...params);

  		if (Error.captureStackTrace) {
  			Error.captureStackTrace(this, this.constructor);
  		}
  		this.status = 601;
  		this.reason = reason;
	}
};

const 	comparePassword = (...passwords) => 
{
	return new Promise((success, reject) => {
		bcrypt.compare(passwords[0], passwords[1], (error, result) => {
			if (error) return reject(error);
			success(result);
		});
	});
};

exports.checkParameters = async (context, next) => {
	context.request.body = querystring.parse(context.request.body);

	if (!context.request.body.login 
		|| !context.request.body.password
		|| !context.request.body.remember)
		throw new LoginError("FAILED");
	return next();
};

exports.checkAccount = async (context, next) => {

	const { 
		login, 
		password } = context.request.body;

	const user = await User.getByUsername(login);
	if (!user) throw new LoginError("FAILED");
	if (!user.active) throw new LoginError("LOCKED");

	const match = await comparePassword(password, user.password);
	if (!match) throw new LoginError("FAILED");

	const count = await Ban.countById(user.id);
	if (count > 0) throw new LoginError("BAN");

	context.user = user;
	return next();
};

exports.checkBlacklist = async (context, next) => 
{
	const count = await Blacklist.countByIp(context.request.ip);

	if (count > 0) throw new LoginError("BLACKLIST");
	return next();
};

exports.getApiKey = async (context, next) => 
{

};