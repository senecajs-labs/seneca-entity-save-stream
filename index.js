
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

  var that = this
  this._emitOnWrite = function(err) {
    if (err)
      that.emit('oneError', err)

    that.emit('one')

    var cb = that._lastCallback

    if (cb) {
      that._lastCallback = null
      cb()
    }
  }
}

inherits(EntitySaveStream, Writable)

EntitySaveStream.prototype._write = function (chunk, skip, callback) {

  this._lastCallback = callback

  chunk.name$ = this._opts.name$

  var ent = this._seneca.make(chunk)

  ent.save$(this._emitOnWrite)
}

module.exports = EntitySaveStream
