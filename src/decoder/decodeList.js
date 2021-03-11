decoder.decodeList = function(STREAM,INDEX,MODEL,DEBUG)
{
	let returns;
	const value = [];
	let index = INDEX;
	while (true)
	{
		returns = decoder.decodeValue(STREAM,index,MODEL,DEBUG);
		value.push(returns.value);
		returns = lexer.readToken(STREAM,returns.index,DEBUG);
		index = returns.index;
		if (returns.token.type !== "SEPARATOR") break;
	};
	if (returns.token.type !== "BRACKET_CLOSE") helper.throwError("Bad formatted list, expected a \"]\"",DEBUG);
	return {value,index};
};
