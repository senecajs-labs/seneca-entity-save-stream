
var act     = require('seneca-act-stream')
  , through = require('through2')


function senecaImport(seneca, opts) {

  //{"cmd":"save","role":"entity","ent":{"entity$":"-/-/pear","name":"hello"},"name":"pear",
  var stream = through.obj(function(chunk, skip, callback) {

    chunk.name$ = opts.name$

    var ent = seneca.make(chunk)
      , data = {
          role: 'entity',
          cmd: 'save',
          name: opts.name$,
          ent: ent
        }

    this.push(data)

    callback()
  })

  stream.pipe(act(seneca, opts.base))

  return stream
}

module.exports = senecaImport
