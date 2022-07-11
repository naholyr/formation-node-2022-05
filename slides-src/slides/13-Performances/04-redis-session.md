## Sessions ? Redis.

Synchroniser les données : **base de données**

### Redis en tant que base de données ultra-rapide

```js
var session = require("express-session");
var RedisStore = require("connect-redis")(session);

app.use(session({
    store: new RedisStore(options),
    secret: "…"
}));
```
