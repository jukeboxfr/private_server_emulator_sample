import randomstring from "randomstring";
import redis from "../../redis";

exports.getToken = async (context, next) => 
{
	const { apikey } = context.request.headers;
	
	
};