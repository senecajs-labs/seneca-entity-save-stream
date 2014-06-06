seneca-entity-save-stream
===============

Stream down and build seneca entities!

```js
var seneca        = require('seneca')()
  , entSaveStream = require('seneca-entity-save-stream')
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
```

Acknowledgements
----------------

This project was kindly sponsored by [nearForm](http://nearform.com).

License
-------

MIT
