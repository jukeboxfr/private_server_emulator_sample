

const 	getConfiguration = async ctx => {
	const { lang } = ctx.query;
	ctx.body = lang;
};

module.exports = { getConfiguration };