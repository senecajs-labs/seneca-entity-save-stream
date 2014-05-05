
var act     = require('seneca-act-stream')
  , through = require('through2')

function entSaveStream(seneca, opts) {

  function buildAndPush(chunk, skip, callback) {

    chunk.name$ = opts.name$

    var ent = seneca.make(chunk)
      , data = {
            role: 'entity'
          , cmd: 'save'
          , name: opts.name$
          , ent: ent
      }

      this.push(data)

      callback()
  }

  var stream = through.obj({
    highWaterMark: 16
  }, buildAndPush)

  stream.pipe(act(seneca, opts.base))

  return stream
}

module.exports = entSaveStream
