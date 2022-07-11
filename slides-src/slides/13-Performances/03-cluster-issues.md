## Ça scale pas !

Mémoire non partagée : **attention aux états globaux**

> Mais je n'ai pas de variables globales !

*Ah oui ?*

<ul>
  <li class=fragment>Sessions ?</li>
  <li class=fragment>Liste des sockets connectés ?</li>
  <li class=fragment>D'autres états cachés ?</li>
</ul>

Note:
- Doc: https://github.com/elad/node-cluster-socket.io
- Implementation: https://github.com/bevacqua/lipstick

