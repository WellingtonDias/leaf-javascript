const lexer = {};

lexer.table =
{
	"WORD": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_",
	"WORD_EXTENDED": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-",
	"NUMBER": "-0123456789",
	"NUMBER_EXTENDED": "-0123456789.",
	"PUNCTUATION": "=[]{},",
	"IGNORABLE": " \t\r\n"
};
