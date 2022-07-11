## socket.io ? Redis !

Synchroniser les états : **PUB/SUB**

### Redis en tant que serveur PUB/SUB léger

```sh
SUBSCRIBE "channel" # client 1
SUBSCRIBE "channel" # client 2

PUBLISH "channel" "hello"
```

Adaptateur dédié à socket.io (stockage + PUB/SUB)

```js
var ioRedis = require('socket.io-redis');

io.adapter(ioRedis({
  "host": "localhost",
  "port": 6379
}));
```
