## Le routage

Route = méthode + url

```js
app.méthode(url, handler)
```

### Format

```js
// Simple
app.get("/hello/world", …)

// Parameter
app.get("/hello/:world", …) // req.params.world

// Complex URL using RegExp
app.get(/^hello\/(.*)$/, …) // req.params[1]

// Parameter constraint
app.get("/hello/:world([^\\s+])", …)
```

note:

## TP (nouveau projet)

**Application fil rouge : jeu en ligne**

* `/` → rendu de la homepage = formulaire d'identification
* `/login` → traitement du formulaire d'identification, redirige vers
* `/welcome/:username` → rendu d'une page "bonjour machin"

**Ne pas tester le flux complet avant code final**

```js
app.get("/", function (req, res) {
  res.render("login");
});

app.get("/welcome/:username", function (req, res) {
  res.render("app", {
    "username": req.params.username
  });
});

// On n'a pas encore les outils pour celle-là
app.post("/login", function (req, res) {
  var postData = …; // ???
  res.redirect("/welcome/" + postData.username);
});
```

Lire les données POST ? **Middlewares**

### Configuration moteur de templates

https://github.com/tj/consolidate.js

```js
app.engine("html", consolidate.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
```
