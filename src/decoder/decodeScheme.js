decoder.decodeScheme = function(VALUE,INDEX,MODEL)
{
	let value;
	if ((MODEL != null) && (MODEL in decoder.models))
	{
		for (type in decoder.models[MODEL])
		{
			if (decoder.models[MODEL][type].validator.test(VALUE))
			{
				value = decoder.models[MODEL][type].constructor(VALUE);
				break;
			};
		};
	};
	return {value,index: INDEX};
};
