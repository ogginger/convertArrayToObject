//test_convertArrayToObject_array_ReturnsObject.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "convertArrayToObject",
  "tests/convertArrayToObject_array_ReturnsObject",
  "tests/convertArrayToObject_SimpleArray_ReturnsObject"
], function(
  TestSuite,
  log,
  convertArrayToObject,
  convertArrayToObject_array_ReturnsObject,
  convertArrayToObject_SimpleArray_ReturnsObject
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_convertArrayToObject initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "convertArrayToObject" );
            xTestSuite.add(convertArrayToObject_array_ReturnsObject);
            xTestSuite.add(convertArrayToObject_SimpleArray_ReturnsObject);
      xTestSuite.test();
    }
  });
});
