## Formatage

[`eslint`](http://eslint.org/)

* [Configurable](http://eslint.org/docs/rules/) (contrairement à `jslint`)
* [Extensible](http://eslint.org/docs/developer-guide/working-with-rules) (plus que `jshint`)
* Règles sémantiques ou de style
* Peut reformater le code avec `eslint --fix`

```sh
npm add --save-dev eslint
npx eslint init
npx eslint .
# Ajouter aux scripts npm : "eslint ."
```

`no-unused-var`, `no-undef`, [`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md), `prefer-arrow-callback`, `no-var`, `prefer-const`, `prefer-rest-params`…
