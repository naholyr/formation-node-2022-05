## ES Modules

### Problème 2 : mocks

- Autre option : passer par `babel`
  - [Node.js setup : mocha/chai/babel7/es6](https://medium.com/@norbertbraun/my-node-js-setup-mocha-chai-babel7-es6-7ee56f6d33d7)
  - [babel-plugin-rewire](https://www.npmjs.com/package/babel-plugin-rewire)

```sh
npm add babel-plugin-rewire @babel/preset-env
mocha --compilers js:@babel/register --plugins rewire --presets env
```
