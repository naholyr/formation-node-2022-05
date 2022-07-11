## Cluster

Profiter des multiples cœurs du CPU :

- [`cluster`](https://nodejs.org/docs/latest/api/cluster.html) (module natif)
- [`sticky-cluster`](https://www.npmjs.com/package/sticky-cluster) (sticky session, requis pour socket.io)

```js
// cluster.js
const server = require("./server");
require("sticky-cluster")((cb) => cb(server), {
  port: 3000,
  debug: true,
});
```

Mettre plusieurs machines en cluster :

- Nginx
- HAProxy
