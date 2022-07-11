## Modules : Scope

Tout se passe comme si la fonction `require` englobait le code du module dans une fonction dédiée :

```js
function require (path) {
  let module = {
    id: '…',
    exports: {},
    …
  }
  let exports = module.exports

  evalScript(path)

  return module.exports
}
```
