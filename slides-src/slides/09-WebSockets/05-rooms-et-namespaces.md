## Socket.io : rooms & namespaces

### Regrouper les sockets avec les rooms

```js
socket.join("private");

io.to("private").emit("event");
```

### Séparer les services avec les namespaces

```js
// server
io.of("/chat").on("connection", …);
io.of("/news").on("connection", …);

// client
const chatSocket = io.connect("…/chat");
const newsSocket = io.connect("…/news");
```

note:

### Room + écoute

```js
io.to("private").on("event", …);
```

**ATTENTION les appels à `to` s'empilent !** (c'est `emit` qui flush)

```js
io.to("room1").on("event1", …);

// broadcast to room1 + room2!
io.to("room2").emit("event2");
```

Solution :

```js
io.rooms = [];
```
