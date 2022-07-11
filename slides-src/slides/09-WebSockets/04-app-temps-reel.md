## Du temps réel dans son application

### Réduire le lag

* Requête HTTP = headers + body
* Message WebSocket = seulement le message

### Notifications

* Recevoir des événements du serveur

```js
// Broadcast
io.emit("flash-news");
```

note:

## TP

Remplacer les intéraction HTTP par du websocket

```js
// server
socket.on("click", function (x, y) {
  // check if good position
  io.emit("winner", "username???");
  // next game soon
  setTimeout( … io.emit("game", x, y, w, h) … );
});

// client
socket.on("winner", …)
socket.on("game", …)
```

**Où récupérer le username ?**
