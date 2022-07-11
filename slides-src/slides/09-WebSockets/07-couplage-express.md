## Couplage avec Express

### HTTP ≠ WebSocket

Dans un handler Express on n'a aucun lien avec le socket

### Établir le lien : la session

Handshaking → HTTP → headers → cookies → session

```js
const sessionMiddleware = expressSession(…)
app.use(sessionMiddleware)

// …

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
  // socket.request.session = user's session
})
```
