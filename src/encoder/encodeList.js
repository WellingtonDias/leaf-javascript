encoder.encodeList = function(LIST)
{
	let list = "[ ";
	for (let i in LIST) list += `${encoder.encodeValue(LIST[i])}, `;
	list = `${list.slice(0,-2)} ]`;
	return list;
};
