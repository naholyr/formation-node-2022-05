## Middlewares standard

Express ne fait rien à part le routing, les middlewares vont assurer les fonctions auxiliaires :

* Formulaire : **`body-parser`** (pas d'upload), **`multer`**
* Logging : **`morgan`** (ce nom…)
* Serveur statique : **`serve-static`**, `serve-index`
* Cookies : **`cookie-parser`** (`req.cookies`, `req.signedCookies`, `res.cookie()`)
* Sessions : **`express-session`**
* Compression GZip : `compression`
* Sécurité CSRF : `csurf`
* etc… https://github.com/senchalabs/connect#middleware

note:

## TP

* Activer le logging
  * Note : `morgan` ne log que les requêtes terminées, oublier d'appeler `next()` dans un middleware et observer ce qui se produit
* Activer le serveur static pour les assets (css, js, images)
* Activer la session

```js
app.use(morgan());
app.use(serveStatic(path.join(__dirname, "public")));
app.use(expressSession({ secret: '…', resave: true, saveUninitialized: false });
app.use(bodyParser.urlencoded({ extended: true }));
```

* Utiliser la session pour l'identification
  * Middleware de protection de route
  * Formulaire de login
* Authentification : voir module `passport`
