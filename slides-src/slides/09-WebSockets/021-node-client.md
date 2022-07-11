## Client WebSocket : côté Node

Via [ws](https://github.com/websockets/ws) ou [uws**@10.148.1**](https://github.com/uNetworking/uWebSockets) ([normalement plus performant](https://github.com/charlieduong94/uws-vs-ws-benchmark))

```js
const WebSocket = require('uws') // or ws

socket.send('some data')

socket.on('message', event => {
  console.log(event.data) // string
})
```

- Peut aussi servir à implémenter un serveur WebSocket
