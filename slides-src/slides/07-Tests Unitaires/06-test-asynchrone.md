## Tester son code asynchrone

Une fonction asynchrone rend la main immédiatement !

```js
it("should do some work", function () {
  doSomeWork(err => expect(err).toNotExist());
  // I'm here before the assertion
});
// And then I'm here, test is finished, assertion not checked
```

Mocha a pensé à tout :

* La fonction de test prend une fonction en paramètre ?
  * Mocha attend l'appel de ce *error-first* callback
* La fonction de test retourne une Promise ?
  * Mocha attend la **résolution de la promesse**
