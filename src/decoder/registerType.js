decoder.registerType = function(MODEL,TYPE,VALIDATOR,CONSTRUCTOR)
{
	if (MODEL in decoder.models) decoder.models[MODEL][TYPE] = {validator: VALIDATOR,constructor: CONSTRUCTOR};
	else throw "Model not registered";
};
