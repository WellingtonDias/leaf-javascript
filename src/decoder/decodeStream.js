decoder.decodeStream = function(STREAM,OPTIONS = {})
{
	let returns;
	const options = {model: null,debug: false,...OPTIONS};
	returns = decoder.decodeValue(STREAM,0,options.model,options.debug);
	const value = returns.value;
	returns = lexer.readToken(STREAM,returns.index,options.debug);
	if (returns.token.type !== "END") helper.throwError("Bad formatted file, expected a EOF",options.debug);
	return value;
};
