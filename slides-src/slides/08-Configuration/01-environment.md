## Environnements

Le standard *de facto* : variable d'environnement **`NODE_ENV`**.

Valeurs usuelles : `development` ou `production`.

```sh
NODE_ENV="development" node "server.js"
```

Dans le script Node :

```js
process.env.NODE_ENV

// Express
app.get("env")
```

* Express : comportements spécifiques si `production`
  * ATTENTION : par défaut = `development`
* **Idée** : configuration fonction de l'environnement

note:

* Utiliser `cross-env` dans les scripts npm pour la compatibilité
* 