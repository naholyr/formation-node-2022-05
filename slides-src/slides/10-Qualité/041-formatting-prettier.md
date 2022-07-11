## Formatage

[`prettier`](https://github.com/prettier/prettier) pour JS/JSX/TS/CSS/MD…

* « *Prettier is an **opinionated** code formatter* »
* [Quelques options](https://prettier.io/docs/en/options.html) quand-même : tabulations, point-virgule, guillemets…
* Pas de validation mais une réécriture
  * à brancher sur le ctrl+s ou un hook precommit

```sh
npm add --save-dev prettier
npx prettier --use-tabs --no-semi --single-quote --trailing-comma es5 .
```

* Avec eslint : [`prettier/prettier`](https://github.com/prettier/eslint-plugin-prettier)
* Pour marier les deux : [prettier-eslint](https://github.com/prettier/prettier-eslint) + [prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli)