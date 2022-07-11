$background:images/redis.png$
$background-size:200px$
$background-repeat:no-repeat$
$background-position:top right$

## Redis

Base clé/valeur **extrèmement rapide**

* Toutes les données chargées en mémoire
  * Hélas la RAM c'est cher :(
* Données structurées et opérations complexes
* Transactions
* Scripts
* Cluster

```js
// npm add ioredis
const Redis = require('ioredis')
const client = new Redis()
client.get('toto') // Promise<String>
```

note:

## TP

* Stocker les sessions dans Redis
* Stocker des données dans Redis ?
