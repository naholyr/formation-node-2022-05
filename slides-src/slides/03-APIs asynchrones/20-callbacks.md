## Callbacks

* On passe à la fonction asynchrone la fonction qui devra être exécutée quand le résultat sera prêt
* Format choisi par Node.js

Signature typique d'une fonction asynchrone par callback :

```js
function foo (...args, callback) {
  // When an error occurs:
  callback(err)
  // When a result is available:
  callback(null, result)
}
```

* *error-first callbacks* (errback) : une erreur est la seule donnée qu'on est sûre de pouvoir recevoir
