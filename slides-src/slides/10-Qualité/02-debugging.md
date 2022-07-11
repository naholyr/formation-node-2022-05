## Debugging avec les Chrome DevTools

### Node ≥ 6.3 : [`node --inspect`](https://github.com/nodejs/node/pull/6792)

```sh
node --inspect [--debug-brk] server.js
```

* Copier-coller l'URL dans Chrome
* [Encore plus fort si Chrome ≥ 55](https://blog.hospodarets.com/nodejs-debugging-in-chrome-devtools)

### Node ≤ 6.3 : `node-inspector`

```sh
npm install -g node-inspector
node-debug server.js
```
