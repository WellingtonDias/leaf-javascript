lexer.readNumber = function(STREAM,INDEX,DEBUG)
{
	let value = "";
	let index = INDEX;
	while (index < STREAM.length)
	{
		const character = STREAM.charAt(index);
		if (!helper.filterString(character,lexer.table["NUMBER_EXTENDED"])) break;
		value += character;
		++index;
	};
	if (isNaN(value)) helper.throwError("Bad formatted number",DEBUG);
	return {token: {type: "NUMBER",value: parseFloat(value)},index};
};
