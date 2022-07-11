## Mocks, spys, injection…

* `sinon`
  * Pour simuler une API
  * Pour "espionner" une fonction (existante ou nouvelle)
* `rewire`
  * Pour remplacer des variables locales à un module
* `proxyquire`
  * Pour hijacker les appels à `require()`

`rewire`/`proxyquire` + `sinon` = possibilier de remplacer n'importe quelle méthode privée d'un module par un mock surveillé
