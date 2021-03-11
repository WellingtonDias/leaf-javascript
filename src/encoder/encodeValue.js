encoder.encodeValue = function(VALUE)
{
	let value = "";
	switch (helper.getType(VALUE))
	{
		case "function":
		case "null": value += "null"; break;
		case "boolean":
		case "number": value += VALUE; break;
		case "string": value += `"${VALUE}"`; break;
		case "array": value += encoder.encodeList(VALUE); break;
		case "object": value += encoder.encodeMap(VALUE); break;
	};
	return value;
};
