## Architecture classique

Arborescence d'une application Express

```
.
├── app.js
├── config/
├── data/
├── lib/
│   ├── routes/
│   └── session-store.js
├── package.json
├── public/
├── server.js
└── views/
    └── layout.html
```

```json
{
  "main": "app.js",
  "scripts": {
    "start": "node server.js",
    "watch": "nodemon -i public server.js"
  }
  …
}
```

note:

**Fichiers statiques en production**

```nginx
location / {
    root /path/to/app/public;
    try_files $uri $uri/ @node;
}

location @node {
    proxy_pass http://127.0.0.1:8080;
}
```

* `config/` Stockage des fichiers de configuration (voir plus loin)
* `data/` Stockage de données fichiers, fixtures de test, etc…
* `lib/routes/` Ranger les routes par thématique
* `lib/session-store.js` Externaliser le *session store* pour pouvoir le réutiliser (sera utile pour partager la session dans un websocket)
