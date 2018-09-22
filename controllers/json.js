"use strict";

const { 
		assetsUrl,
		serverLanguages, 
		failoverLanguage } = require("../config/client")
const { randomHash } = require("../utils/random");
const { createSession } = require("../cache");


const 	getConfiguration = async ctx => {
	var	sessionId;
	var { language } = ctx.query;

	if (serverLanguages.includes(language))
		language = failoverLanguage;
	sessionId = createSession(language);
	ctx.body = {
		assetsUrl,
		serverLanguages,
		failoverLanguage,
		language,
		sessionId
	};
};

module.exports = getConfiguration;