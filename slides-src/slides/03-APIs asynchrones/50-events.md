## Évènements

* Classe [`EventEmitter`](http://nodejs.org/api/events.html#events_class_events_eventemitter)
* Exemples : socket (client http, serveur http, https, udp…), streams, process…
* `emit` = exécuter les listeners

```js
ee.on("eventName", handler); // === ee.addListener
ee.removeListener("eventName", handler);
ee.removeAllListeners("eventName");

ee.once("eventName", …); // your best friend against memory leak

ee.emit("eventName", arg1, arg2...);
```

Attention à l'événement spécial **`error`**
