## Le REPL

```sh
node
```

**R**ead, **E**valuate, **P**rint, **L**oop

```
> 1+1
2
> 'node'.toUpperCase()
'NODE'
```

* Auto-complétion (idéal pour explorer les APIs)
* Les modules du core sont pré-chargés
* Visualiser l'asynchrone

```
> setImmediate(() => console.log('hello'))
…
> hello
1+1
2
```