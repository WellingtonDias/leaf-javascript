lexer.readScheme = function(STREAM,INDEX,DEBUG)
{
	let character;
	let value = "";
	let index = INDEX + 1;
	while (index < STREAM.length)
	{
		character = STREAM.charAt(index);
		++index;
		if (character === ">") break;
		value += character;
	};
	if (character !== ">") helper.throwError("Bad formatted scheme, expected a \">\"",DEBUG);
	return {token: {type: "SCHEME",value},index};
};
