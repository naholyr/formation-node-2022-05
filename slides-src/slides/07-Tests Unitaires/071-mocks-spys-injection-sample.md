## Mocks, spys, injection…

```js
// module-a-tester.js
const client = require('./db')

exports.addUser = name => …
```

```js
// on remplace le client par un faux
const sinon = require('sinon')
const client = {
  insert: sinon.stub().returns(Promise.resolve({ id: 42 }))
}

// on injecte cette dépendance
const proxyquire = require('proxyquire')
const mod = proxyquire('../module-a-tester', {
  './db': client
})

// on peut tester
expect(mod.addUser('toto')).to.eventually.have.property('id', 42)
expect(client.insert.insert).to.equal(true)
```
