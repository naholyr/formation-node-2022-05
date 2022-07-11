## Attention aux calculs bloquants !

* Requête client = empilée dans l'*event loop*
* *Bloquer* = aucune requête n'est traitée pendant ce temps
  * Elles continuent de s'empiler

<p class=fragment>Apprenez à <strong class=fragment>VRAIMENT</strong> craindre le code bloquant</p>

<img class="screen fragment" src="images/horror.jpg">

note:

Tester le fameux Fibonnacci, en profiter pour réaliser un routing simple avec `http`

```js
function fibo (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function handler (req, res) {
  if (req.url.substring(0, 6) === "/fibo/") {
    var n = Number(req.url.substring(6));
    if (isNaN(n)) {
      res.statusCode = 400;
      res.write("ERROR: valid number expected");
    } else {
      var result = fibo(n);
      res.write("<code>fibo(" + n + ") = <strong>" + result + "</strong></code>");
    }
  } else if (req.url === "/") {
    res.write("Usage: /fibo/{number}");
  } else {
    res.statusCode = 404;
    res.write("Not found");
  }

  // No res.end = browser never renders
  // Duplicate res.end = server crashes
  res.end();
}
```
