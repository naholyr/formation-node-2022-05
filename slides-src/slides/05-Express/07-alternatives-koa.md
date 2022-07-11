## Alternatives : [Koa](https://github.com/koajs/koa/wiki) l'héritier

* Support asynchrone natif
* Un objet `context` mieux organisé

```js
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa'; // Response
});

app.listen(3000);
```

* Routing avec [`@koa/router`](https://github.com/koajs/router)
* Parsing de requête avec [`koa-body`](https://github.com/dlau/koa-body)
* Sessions avec [`koa-redis`](https://github.com/koajs/koa-redis)
* Sécurité avec [`koa-helmet`](https://github.com/venables/koa-helmet#readme)
* `koa-logger`, `koa-locales`, `koa-views`…