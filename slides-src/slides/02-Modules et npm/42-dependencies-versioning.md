## Dépendances : versions

`npm` utilise le *semantic versionning* :

- `~1.5.3` (équivalent) ~= 1.5.x
- `^1.5.3` (compatible) ~= 1.x

**BADASS** → immunisé au "dependency hell"

Attention aux sous-dépendances qui se mettent à jour !

- Bien commiter `package-lock.json`, qui rend les installations reproductibles
