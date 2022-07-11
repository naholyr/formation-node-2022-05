## Assertions

* Un test échoue si son code plante
* Assertion = plante si une condition n'est pas vérifiée
  * lecture agréable
  * message d'erreur utilisable

[Chai](http://chaijs.com/) offre une syntaxe sexy (expect ou should) :

```js
expect(3.14)
  .to.be.a("number")
  .and.to.be.below(4)
  .and.to.be.above(3);
```
