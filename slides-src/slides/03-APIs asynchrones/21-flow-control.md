## Flow control

Appels en série : "Pyramid of doom"

```js
fs.readFile(file1, (…) => {
  fs.readFile(file2, (…) => {
    fs.readFile(file3, (…) => {
      // Dafuq?
    });
  });
});
```

Appels en concurrence : complexe…

```js
let pending = 42;
…
```

Pour éviter le [callback hell](http://callbackhell.com/) : `async`
