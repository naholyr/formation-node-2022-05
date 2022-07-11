## ES Modules

### Problème 1 : exécution des tests

- Le plus simple : `esm`

```sh
npm add esm
mocha -r esm
# Note: '"esm": "all"' peut être nécessaire dans le package.json
```

- Pour garder le mode natif, [il faut bidouiller un peu](https://github.com/mochajs/mocha/issues/3006#issuecomment-406897900)
  - Flag passé avec `NODE_OPTIONS`
  - Mocha ne charge que les `.js`, donc il faut écrire son propre point d'entrée chargeant les `.mjs`
