$background:images/socket.io.png$
$background-size:400px$
$background-repeat:no-repeat$
$background-position:top right$

## Socket.io à la rescousse !

API de messaging basée sur `EventEmitter`

```js
io.on("connection", (socket) => {

  socket.emit("hello", ...args);

  socket.on("hello-response", (...args) => { /* … */ });

});
```

Multiples transports si *WebSocket* ne passe pas :

* Ajax Long Polling
* WebSocket
* On garde le long polling si WS ne marche pas

note:

## TP

Intégrer socket.io dans l'application, d'abord tout dans `server.js` puis externaliser dans un module à part (on peut par exemple utiliser le singleton pour pouvoir lancer `io.emit()` depuis une route Express) :

```js
// lib/websocket.js
const socketio = require("socket.io")

exports.io = null

exports.init = (server) => {
  if (exports.io !== null) {
    throw …
  }

  return exports.io = socketio(server)
}
```
