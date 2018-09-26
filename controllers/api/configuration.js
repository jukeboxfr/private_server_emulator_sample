"use strict";
import configuration from "../../client.json";
import redis from "../../redis";

exports.getConfiguration = async (context, next) => {
	var { language } = context.query;

	if (!language) 
		language = configuration.failoverLanguage;
	if (!configuration.serverLanguages.includes(language)) 
		language = configuration.failoverLanguage;
	
	context.body = Object.assign(configuration, { language });
};