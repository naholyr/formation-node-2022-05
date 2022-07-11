## Tests et bases de données

Penser à préparer ses données de test : `before`, `beforeEach`

```js
define('my feature', () => {
  before(cb => loadFixtures(cb)) // or return a promise
  // shorter: before(loadFixtures)
})
```

Faire le ménage en partant

```js
after(cb => cleanData(cb)) // or return a promise
// shorter: after(cleanData)
```

<strong class="fragment">On a **vraiment** pas envie de cibler la BDD de prod</strong> <span class="fragment"><br>→ [`env-test`](https://www.npmjs.com/package/env-test) + [`mocha.opts`](https://mochajs.org/#mochaopts)</span>
