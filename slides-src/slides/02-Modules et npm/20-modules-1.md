## Modules : [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.0)

**Format par défaut des modules Node**

* Fichiers `.js` ou `.cjs`
* Charger un module : `require(cheminRelatif)`
* Définir un module : `module.exports = publicAPI`

```js
// monmodule.js ou monmodule/index.js
module.exports = {
  hello () { return "Hello, world" }
}
```

* **un module = un fichier** ou un dossier

```js
// script.js
const mod = require("/path/to/monmodule") // .js facultatif
console.log(mod.hello())
```
