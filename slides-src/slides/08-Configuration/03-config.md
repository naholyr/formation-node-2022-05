## Aller plus loin

Le module [`config`](https://github.com/lorenwest/node-config) : *convention over configuration*

* Configuration accessible partout : `require('config')`
* [Gère de multiples formats](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-formats)
* [Surcharge à plusieurs niveaux](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order)

```
config/
  default.json     # Options par défaut
  development.yml  # Environnement de développement
  production.yml   # Environnement de production
  test.yml         # npm test
  local.ini        # Non versionnée: configuration du host
```

Surcharge par [variables d'environnement](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables) ou [ligne de commande](https://github.com/lorenwest/node-config/wiki/Command-Line-Overrides)… La totale !
