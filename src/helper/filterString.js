helper.filterString = function(STRING,FILTER)
{
	let count = STRING.length;
	for (let i1 in STRING)
	{
		for (let i2 in FILTER)
		{
			if (STRING.charAt(i1) === FILTER.charAt(i2))
			{
				--count;
				break;
			};
		};
	};
	return count === 0;
};
