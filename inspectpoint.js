
var util = require('util');
var stream = require('stream');

function Inspectpoint(options) {
  if (!(this instanceof Inspectpoint)) return new Inspectpoint(options);

  stream.Transform.call(this, {
    objectMode: true
  });
  
  this._options = options;
}
module.exports = Inspectpoint;
util.inherits(Inspectpoint, stream.Transform);

Inspectpoint.prototype._transform = function (object, encodeing, done) {
  this.push(new Buffer(util.inspect(object, this._options)));

  done(null);
};

Inspectpoint.prototype._flush = function (done) {
  done(null);
};
