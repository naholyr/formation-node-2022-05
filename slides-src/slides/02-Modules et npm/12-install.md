## npm : installation

```sh
npm add $moduleName
```

- Installe dans le dossier `node_modules` le plus proche (en remontant)
- Persiste la dépendance dans `package.json`

```js
const _ = require("lodash");
import _ from "lodash";
```

- Va chercher dans le dossier `node_modules` le plus proche (en remontant)

**Le `package-lock.json` décrit l'arbre des dépendances**
