//convertArrayToObject.js: Functional Logic.

define([], function() {
  return function( Input ) {
    var object = {};
    Input.forEach(function( element ) {
      Object.keys(element).forEach(function( key ) {
        object[key] = element[key];
      });
    });
    return object;
  };
});
