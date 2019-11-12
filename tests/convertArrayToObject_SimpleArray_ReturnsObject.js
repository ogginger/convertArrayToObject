//convertArrayToObject_SimpleArray_ReturnsObject.js: Testing logic.

define([
	"convertArrayToObject"
], function(
	convertArrayToObject
) {
	return {
		"Name":"convertArrayToObject_SimpleArray_ReturnsObject",
		"Input": [{"a": 1}, {"b": 2}],
		"Function": convertArrayToObject,
		"ExpectedOutput": { "a": 1, "b": 2 },
		"Comparator": { "Object": true },
		"Debug": true
	};
});
