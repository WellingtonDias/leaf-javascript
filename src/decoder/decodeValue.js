decoder.decodeValue = function(STREAM,INDEX,MODEL,DEBUG)
{
	const returns = lexer.readToken(STREAM,INDEX,DEBUG);
	switch (returns.token.type)
	{
		case "NULL":
		case "BOOLEAN":
		case "NUMBER":
		case "STRING": return {value: returns.token.value,index: returns.index};
		case "SCHEME": return decoder.decodeScheme(returns.token.value,returns.index,MODEL);
		case "BRACKET_OPEN": return decoder.decodeList(STREAM,returns.index,MODEL,DEBUG);
		case "BRACE_OPEN": return decoder.decodeMap(STREAM,returns.index,MODEL,DEBUG);
		default: helper.throwError("Bad formatted token",DEBUG);
	};
};
