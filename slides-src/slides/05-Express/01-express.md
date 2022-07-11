## Express

*Micro-framework* pour les applications web Node : http://expressjs.com/

* [API élégante](http://expressjs.com/4x/api.html)
* [Extensible (*middlewares*)](http://expressjs.com/guide/using-middleware.html)
* [Configurable](http://expressjs.com/4x/api.html#app.settings)
* [Rendu par templates](https://github.com/tj/consolidate.js)


```js
const app = express();

app.get("/", function (req, res) {
  // req: http://expressjs.com/4x/api.html#request
  // res: http://expressjs.com/4x/api.html#response
});

const server = http.createServer(app);
```

note:

Installer express

```sh
npm add express
```

Écrire le serveur Hello world :

```js
'use strict';

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world');
});

const server = http.createServer(app);

server.listen(8080, () => {
  const { host, port } = server.address();
  console.log("Server ready %s:%s", host, port);
});
```

### Configuration

Supprimer l'entête automatique "X-Powered-By: Express"

```js
app.set("x-powered-by", false);
app.get("x-powered-by") // two-face get
```
