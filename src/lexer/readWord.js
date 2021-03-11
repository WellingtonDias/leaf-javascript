lexer.readWord = function(STREAM,INDEX)
{
	let value = "";
	let index = INDEX;
	while (index < STREAM.length)
	{
		const character = STREAM.charAt(index);
		if (!helper.filterString(character,lexer.table["WORD_EXTENDED"])) break;
		value += character;
		++index;
	};
	switch (value)
	{
		case "null": return {token: {type: "NULL",value: null},index};
		case "false": return {token: {type: "BOOLEAN",value: false},index};
		case "true": return {token: {type: "BOOLEAN",value: true},index};
		default: return {token: {type: "WORD",value},index};
	};
};
