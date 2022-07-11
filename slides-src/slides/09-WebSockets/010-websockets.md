## Les WebSockets

* "Temps réel"
* Full-duplex (requêtes & réponses se croisent)
* Protocole basé sur HTTP

```
Connection: Upgrade
Upgrade: websocket
```

[Excellent support navigateur](http://caniuse.com/websocket) <span class="fragment">(IE ≥ 10, Android ≥ 4.4)</span>

<span class="fragment">Mais attention aux proxies !</span>
