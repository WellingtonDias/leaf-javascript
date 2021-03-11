lexer.readPunctuation = function(STREAM,INDEX)
{
	let type;
	switch (STREAM.charAt(INDEX))
	{
		case "=": type = "EQUATION"; break;
		case "[": type = "BRACKET_OPEN"; break;
		case "]": type = "BRACKET_CLOSE"; break;
		case "{": type = "BRACE_OPEN"; break;
		case "}": type = "BRACE_CLOSE"; break;
		case ",": type = "SEPARATOR"; break;
	};
	return {token: {type},index: ++INDEX};
};
