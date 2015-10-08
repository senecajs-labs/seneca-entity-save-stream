'use strict'

var test = require('tape')
var entSaveStream = require('..')
var seneca = require('seneca')

test('importing data works as expected', function (t) {
  t.plan(2)

  var s = seneca()
  var pear = s.make$('pear')
  var pearImporter = entSaveStream(s, {name$: 'pear'})

  pearImporter.end({name: 'my pear', price: 200}, function () {
    pear.list$({}, function (err, res) {
      t.equal(err, null)
      t.equal(res.length, 1)
    })
  })
})

test('finish event works as expected', function (t) {
  t.plan(2)

  var s = seneca()
  var pear = s.make$('pear')
  var pearImporter = entSaveStream(s, {name$: 'pear'})

  pearImporter.on('finish', function () {
    pear.list$({}, function (err, res) {
      t.equal(err, null)
      t.equal(res.length, 1)
    })
  })

  pearImporter.end({
    name: 'my pear',
    price: 200
  })
})

test('one event works as expected', function (t) {
  t.plan(2)

  var s = seneca()
  var pear = s.make$('pear')
  var pearImporter = entSaveStream(s, {name$: 'pear'})

  pearImporter.on('one', function () {
    pear.list$({}, function (err, res) {
      t.equal(err, null)
      t.equal(res.length, 1)
    })
  })

  pearImporter.end({
    name: 'my pear',
    price: 200
  })
})
