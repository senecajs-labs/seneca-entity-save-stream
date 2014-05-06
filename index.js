
var ActStream = require('seneca-act-stream')
  , inherits  = require('inherits')

function EntitySaveStream(seneca, opts) {
  if (!(this instanceof EntitySaveStream)) {
    return new EntitySaveStream(seneca, opts)
  }

  this._opts = opts
  this._seneca = seneca

  ActStream.call(this, seneca, opts.base)
}

inherits(EntitySaveStream, ActStream)

EntitySaveStream.prototype._write = function (chunk, skip, callback) {

  chunk.name$ = this._opts.name$

  var ent = this._seneca.make(chunk)
    , data = {
         role: 'entity'
      , cmd: 'save'
      , name: this._opts.name$
      , ent: ent
    }

  ActStream.prototype._write.call(this, data, skip, callback)
}

module.exports = EntitySaveStream
