
var Inspectpoint = require('./inspectpoint.js');
var test = require('tap').test;

var deep = {
  a: {
    b: {
      c: [1]
    },
  }
};

test('no options', function (t) {
  var inspect = Inspectpoint();
      inspect.write(deep);
      inspect.end();
  
  t.equal(inspect.read().toString(), '{ a: { b: { c: [Object] } } }\n');
  t.end();
});

test('set options', function (t) {
  var inspect = Inspectpoint({depth: null});
      inspect.write(deep);
      inspect.end();
  
  t.equal(inspect.read().toString(), '{ a: { b: { c: [ 1 ] } } }\n');
  t.end();
});
