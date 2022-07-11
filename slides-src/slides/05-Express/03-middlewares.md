## Middlewares

Un middleware s'intercale dans le traitement d'une route.

```js
function log (req, res, next) {
  console.log(new Date, req.method, req.url);
  // Async: call next or chain is broken!
  next();
});
```

Ils peuvent être utilisés au niveau de l'application :

```js
app.use(log);
…
```

Ou au niveau d'une route seulement :

```js
app.get("/logged", log, function (req, res) { … });
app.get("/unlogged", function (req, res) { … });
```

note:

**Middleware de gestion d'erreur**

```js
app.use(function (err, req, res, next) {
  res.render("error", {
    "err": err.message
  });
});
```
