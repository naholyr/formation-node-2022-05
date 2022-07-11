## Client WebSocket : [l'API DOM](https://developer.mozilla.org/fr/docs/Web/API/WebSocket)

```js
var socket = new WebSocket('ws://url');

socket.send('some data');

socket.addEventListener('message', (event) => {
  console.log(event.data); // string
})
```

* pas de distinction des messages (simples strings)
* événement "open", "message", "close" et basta
* un peu limité…
