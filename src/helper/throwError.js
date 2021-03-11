helper.throwError = function(MESSAGE,DEBUG)
{
	if (DEBUG) console.log(`\u001b[1m\u001b[31mERROR: ${MESSAGE}.\u001b[39m\u001b[22m`);
	throw MESSAGE;
};
