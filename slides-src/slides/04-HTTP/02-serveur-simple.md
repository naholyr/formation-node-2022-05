## Un serveur HTTP simple

Chaque requête passe par le *handler*

```js
function handler (req, res) {
  // req instanceof http.IncomingMessage
  // res instanceof http.ServerResponse
  res.setHeader('content-type', 'text/plain')
  res.write(`You visit ${req.url}`)
  res.end()
}
```

* La *request* représente les données envoyées par le client
  * `method`, `url`, `headers`, données POST (*readable stream*)
* La *response* représente la réponse qui sera envoyée
  * définition des headers
  * envoi du contenu (*writable stream*)
