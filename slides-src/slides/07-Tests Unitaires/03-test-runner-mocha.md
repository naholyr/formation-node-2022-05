## Test runner

Le "test runner" est l'outil qui va prendre nos fichiers de test et les exécuter, et indiquer le résultat des tests.

* API spécifique injectée
* génération de rapports (Jenkins)

[mocha](https://github.com/mochajs/mocha) est un choix populaire pour Node.

```sh
# CI
mocha --reporter xunit --check-leaks

# Dev
mocha --reporter list --check-leaks --watch --growl
```

Note : `--growl` peut requérir [un outil tiers](https://github.com/tj/node-growl)