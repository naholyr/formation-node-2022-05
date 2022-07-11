## ES2017

* Fonctions capables de s'interrompre et redémarrer
* Intégration native des promesses

### [`async` / `await`](https://tc39.github.io/ecmascript-asyncawait)

```js
const incr = async (promise) {
  const value = await promise
  return value + 1
}

async function main () {
  console.log(await incr(getFromHTTP()))
}

main()
```

Attention à *series* vs *parallel* : on n'est pas exempté de `Promise.all` !
