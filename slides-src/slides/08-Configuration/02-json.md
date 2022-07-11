## Modules JSON

`require` comprend le JSON automatiquement

```js
module.exports = require("./config/config.json");
```

### Configuration dépendant de l'environnement

```js
module.exports = require("./config/config-" + process.env.NODE_ENV + ".json");
```

### Environnement + valeurs par défaut

```js
module.exports = Object.assign({},
  require('./config/defaults.json'),
  require(`./config/${process.env.NODE_ENV}.json`)
)
```
