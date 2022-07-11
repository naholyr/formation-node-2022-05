## Phase d'authentification

Filtrer les connexions avec les *middlewares*

```js
io.use((socket, next) => {
  next(error) // refuse connection
})
```

À l'origine une requête HTTP, qui reste disponible :

```js
socket.request
socket.request.headers
// etc…

// addition:
socket.request.res // http://git.io/Fz1y
```
