## ES Modules

### Problème 2 : mocks

- Par nature les modules natifs ne sont pas "mockables"
- Utiliser l'injection de dépendance

```js
import foo from './foo';
// Can't mock 'foo'
export default value => foo(value);
// Can inject a mock: bar(value, myFoo)
export default (value, _foo = foo) => _foo(value);
// A bit trickier but nicer when multiple deps: bar(value, { foo: myFoo })
export default (value, { foo: _foo = foo } = {}) => _foo(value);
```
