'use strict'

var seneca = require('seneca')()
var entSaveStream = require('..')
var pear = seneca.make('pear')
var pearImporter = entSaveStream(seneca, { name$: 'pear' })

pearImporter.on('one', function () {
  console.log('element saved')
})

pearImporter.end({name: 'my pear', price: 200}, function () {
  pear.list$({}, function (err, res) {
    if (!err) console.log(res)
  })
})
