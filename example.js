
var seneca        = require('seneca')()
  , entSaveStream = require('./')
  , pear          = seneca.make('pear')
  , pearImporter  = entSaveStream(seneca, { name$: 'pear' })

pearImporter.on('one', function() {
  console.log('element saved')
})

pearImporter.end({
  name: 'my pear',
  price: 200
}, function() {
  pear.list$({}, function(err, res) {
    console.log(res)
  })
})
