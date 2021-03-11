encoder.encodeMap = function(MAP)
{
	let map = "{ ";
	for (let key in MAP) map += `${key} = ${encoder.encodeValue(MAP[key])}, `;
	map = `${map.slice(0,-2)} }`;
	return map;
};
