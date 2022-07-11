## `npm test`

* `./node_modules/.bin/mocha` : long, erreurs possibles
* Installation globale : une étape de plus

Des solutions :

* `Makefile` : standard, mais Mac/Linux
* scripts npm : devient standard, multi-plateforme

```json
{
  "scripts": {
    "test": "mocha -R spec -G --check-leaks test/"
  }
}
```
