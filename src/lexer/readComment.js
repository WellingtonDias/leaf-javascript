lexer.readComment = function(STREAM,INDEX)
{
	let index = INDEX + 1;
	while (index < STREAM.length)
	{
		const character = STREAM.charAt(index);
		if (character === "\n") break;
		++index;
		if (character === "#") break;
	};
	return index;
};
