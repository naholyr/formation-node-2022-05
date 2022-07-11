## Module `http`

```js
const http = require('http')
```

http://nodejs.org/api/http.html

**`createServer`** : création de serveur HTTP

```js
http.createServer((incomingMessage, serverResponse) => {})
```

**`request`** : effectuer une requête HTTP

```js
const clientRequest = http.request('http://www.google.com')
```

Préférer le module `axios` ou `node-fetch`
