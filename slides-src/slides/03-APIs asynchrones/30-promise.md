## [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Manipuler la représentation de la valeur future au lieu d'attendre sa disponibilité

* **Standard EcmaScript**, support natif dans Node
* **Stateful**
* **Chaînable**

```js
var promiseOfBuffer = read("file")
// .then = when value really available
promiseOfBuffer.then(callback) // callback(buffer)
// this returns the promise of callback(buffer)'s return value
.catch(onError) // onError(err)
// this also returns a promise…
```

Aide à l'orchestration : `Promise.all(promises)`
