## Alternative populaire : [dotenv](https://www.npmjs.com/package/dotenv)

- Tout est en variables d'environnement ([12-factor app](https://12factor.net/fr/))
- Un fichier `.env`

```ini
# .env
VARIABLE=value
X=1
```

```sh
X=2 node -r dotenv/config your_script.js
```

```js
console.log(process.env.VARIABLE, process.env.X); // value 2
```

Possible de retrouver un héritage de configuration avec [dotenv-flow](https://www.npmjs.com/package/dotenv-flow)
