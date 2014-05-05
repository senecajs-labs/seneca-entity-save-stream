
var test          = require('tap').test
  , senecaImport  = require('./')
  , seneca        = require('seneca')
  , defaults      = {
      log:{
        map:[
          {level:'all',handler:'print'}
        ]
      }
    }

test('importing data', function(t) {
  t.plan(1)

  var s            = seneca(defaults)
    , pear         = s.make('pear')
    , pearImporter = senecaImport(s, { name$: 'pear' })

  pearImporter.end({
    name: 'my pear',
    price: 200
  }, function() {
    pear.list$({}, function(err, res) {
      t.equal(res.length, 1)
    })
  })
})
