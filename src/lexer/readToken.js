lexer.readToken = function(STREAM,INDEX,DEBUG)
{
	let index = INDEX;
	while (index < STREAM.length)
	{
		const character = STREAM.charAt(index);
		if (helper.filterString(character,lexer.table["WORD"])) return lexer.readWord(STREAM,index);
		else if (helper.filterString(character,lexer.table["NUMBER"])) return lexer.readNumber(STREAM,index,DEBUG);
		else if (helper.filterString(character,lexer.table["PUNCTUATION"])) return lexer.readPunctuation(STREAM,index);
		else if (helper.filterString(character,lexer.table["IGNORABLE"])) ++index;
		else
		{
			switch (character)
			{
				case "#": index = lexer.readComment(STREAM,index); break;
				case "\"": return lexer.readString(STREAM,index,DEBUG);
				case "<": return lexer.readScheme(STREAM,index,DEBUG);
				default: helper.throwError("Invalid token",DEBUG);
			};
		};
	};
	return {token: {type: "END"},index};
};
