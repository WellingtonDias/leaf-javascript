decoder.decodeMap = function(STREAM,INDEX,MODEL,DEBUG)
{
	let returns;
	const value = {};
	let index = INDEX;
	while (true)
	{
		returns = lexer.readToken(STREAM,index,DEBUG);
		if (returns.token.type !== "WORD") helper.throwError("Bad formatted map, expected a key name",DEBUG);
		if (returns.token.value in value) helper.throwError("Bad formatted map, duplicate key name",DEBUG);
		key = returns.token.value;
		returns = lexer.readToken(STREAM,returns.index,DEBUG);
		if (returns.token.type !== "EQUATION") helper.throwError("Bad formatted map, expected a \"=\"",DEBUG);
		returns = decoder.decodeValue(STREAM,returns.index,MODEL,DEBUG);
		value[key] = returns.value;
		returns = lexer.readToken(STREAM,returns.index,DEBUG);
		index = returns.index;
		if (returns.token.type !== "SEPARATOR") break;
	};
	if (returns.token.type !== "BRACE_CLOSE") helper.throwError("Bad formatted map, expected a \"}\"",DEBUG);
	return {value,index};
};
