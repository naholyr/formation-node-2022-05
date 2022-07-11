## [ES Modules](https://nodejs.org/api/esm.html)

**Stable depuis 15.x** - **Warning avant 13.x**

```js
// export (module.mjs)
const life = 42
export default life
export const named1 = 1
export function named2() { return 2 }

// import
import defaultExport from 'module'
import { named1, named2 as renamed } from 'module'
import * as object from 'module'
import defaultExport, { named1 } from 'module'
```

- ES6 : symboles connus [au parsing](https://medium.com/@mivanichok/understanding-es6-modules-in-depth-article-b49612926e39)
- CommonJS : symboles connus au runtime
- [Type de modules](https://nodejs.org/docs/latest-v15.x/api/packages.html#packages_determining_module_system) : extension explicite (`.mjs` ou `.cjs`) ou global (`"type": "module"`)