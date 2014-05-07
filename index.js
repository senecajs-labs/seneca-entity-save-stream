
var Writable = require('readable-stream').Writable
  , inherits = require('inherits')

function EntitySaveStream(seneca, opts) {
  if (!(this instanceof EntitySaveStream)) {
    return new EntitySaveStream(seneca, opts)
  }

  this._opts = opts
  this._seneca = seneca

  Writable.call(this, {
    objectMode: true,
    highWaterMark: 16
  })
}

inherits(EntitySaveStream, Writable)

EntitySaveStream.prototype._write = function (chunk, skip, callback) {

  chunk.name$ = this._opts.name$

  var ent = this._seneca.make(chunk)

  ent.save$(callback)
}

module.exports = EntitySaveStream
