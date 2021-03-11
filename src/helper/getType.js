helper.getType = function(VALUE)
{
	if (typeof VALUE === "boolean") return "boolean";
	else if (typeof VALUE === "number") return "number";
	else if (typeof VALUE === "string") return "string";
	else if (Array.isArray(VALUE)) return "array";
	else if (typeof VALUE === "object") return "object";
	else if (typeof VALUE === "function") return "function";
	else return "null";
};
