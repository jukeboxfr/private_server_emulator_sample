
import User from "../../models/user";


exports.checkParams = async (context, body) => {
	const { 
		login,
		password, 
		email,
		nickname,
		guestAccountId } = context.request.body;
};
