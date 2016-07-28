![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] plugin

# seneca-entity-save-stream

[![Gitter][gitter-badge]][gitter-url]

Stream down and build seneca entities!

- __Version:__ 0.0.4
- __Tested on:__ Seneca 0.7.1
- __Node:__ 0.10, 0.11, 0.12, 4

If you're using this module, and need help, you can:

- Post a [github issue][],
- Tweet to [@senecajs][],
- Ask on the [Gitter][gitter-url].

If you are new to Seneca in general, please take a look at [senecajs.org][]. We have everything from
tutorials to sample apps to help get you up and running quickly.

## Install
To install, simply use npm. Remember you will need to install [Seneca.js][] if you haven't already.

```sh
npm install seneca-entity-save-stream
```

## Test
To run tests, simply use npm:

```sh
npm run test
```

## Example

```js
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
```

## Contributing
The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.


## Acknowledgements
This project was kindly sponsored by [nearForm](http://nearform.com).


## License
Copyright Matteo Collina and other contributors 2014 - 2016, Licensed under [MIT][].


[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca

[MIT]: ./LICENSE
[Senecajs org]: https://github.com/senecajs/
[senecajs.org]: http://senecajs.org/
[Seneca.js]: https://www.npmjs.com/package/seneca
[github issue]: https://github.com/senecajs-labs/seneca-entity-save-stream/issues
[@senecajs]: http://twitter.com/senecajs
