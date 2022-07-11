$background:images/logos/libuv.png$
$background-size:400px$
$background-repeat:no-repeat$
$background-position:top right$

Node.js multiplateforme ?

## libuv

* Couche d'abstraction en C
* Multi OS
* En charge de l'event loop
* Aussi utilisée hors node (luvit)

note:

Initialement écrite par Bert Belder (membre du TC)
C'est grâce à cette brique que le support de Windows est possible.

Précedement:
epool, kqueue
libeio, libev, IOCP

Bientôt utilisée dans neovim.
