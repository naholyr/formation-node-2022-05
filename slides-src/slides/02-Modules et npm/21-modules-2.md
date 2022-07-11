## Modules : [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.0)

* Définition alternative : `exports.name = something`

```js
// monmodule.js ou monmodule/index.js
exports.hello = function () {
  return "Hello, world"
}
```

```js
// script.js
const mod = require("/path/to/monmodule") // .js facultatif
console.log(mod.hello())
```
