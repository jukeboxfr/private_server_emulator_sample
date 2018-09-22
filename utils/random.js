"use strict";

const 	randomString = (length, charset) => {
	var str = "";
	charset = charset || "abcdefghijklmnopqrstuvwxyz zyxwvutsrqponmlkjihgfedcba0123456789";
	while (charset.length < length)
	{
		const index = Math.floor(Math.random() * charset.length);
		str += charset[index];
	}
	return (str);
};

module.exports = {
	randomString
}