### PUB/SUB

```js
// Subscribe
client.subscribe('channel') // Promise<number>
client.on('message', (channel, message) => { … })

// Publish
client.publish('channel', 'message')
```

### PUSH/PULL

```js
// Worker
const nextTask = () => client.blpop('jobs').then(work)
const work = job => {
  … // TODO push result to another queue for REQ/REP
  nextTask()
}

// Master
client.rpush('jobs', job)
// TODO pop result from another queue for REQ/REP
```
