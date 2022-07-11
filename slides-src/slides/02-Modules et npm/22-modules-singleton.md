## Modules : Singleton

```js
// premier chargement = lecture et exécution
const mod1 = require('/path/to/monmodule')

// pas d'exécution, le module est caché
const mod2 = require('/path/to/monmodule')

mod1 === mod2 // true
```
