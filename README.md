# Prérequis pour l'atelier Reactjs
* [Installation](https://github.com/flepretre/prerequis-atelier-react/#installation)
* [Valider le fonctionnement du serveur](https://github.com/flepretre/prerequis-atelier-react/#valider-le-fonctionnement-du-serveur)
* [Valider le fonctionnement des tests](https://github.com/flepretre/prerequis-atelier-react/#valider-le-fonctionnement-des-tests)
* [Tips](https://github.com/flepretre/prerequis-atelier-react/#tips)

## Installation
Voici la marche à suivre valider les prérequis pour l'atelier Reactjs.

Tout d'abord installez [nodejs](https://nodejs.org/).

Clonez ce repository sur votre machine :
``` sh
git clone https://github.com/flepretre/prerequis-atelier-react.git
```

Ensuite, téléchargez les dépendances à l'aide de npm :
``` sh
cd prerequis-atelier-react/
npm install
```

## Valider le fonctionnement du serveur
Lancer le seveur d'application via la commande suivante :
``` sh
./node_modules/gulp/bin/gulp.js serve
```

Vous devriez avoir en sortie
``` sh
[13:23:55] Using gulpfile ~/atelier-react-prerequis/gulpfile.js
[13:23:55] Starting 'webpack'...
[13:23:55] Finished 'webpack' after 119 ms
[13:23:55] Starting 'serve'...
[13:23:55] Finished 'serve' after 19 ms
livereload[tiny-lr] listening on 35729 ...
Server started
[13:23:56] Version: webpack 1.7.3
    Asset    Size  Chunks             Chunk Names
bundle.js  633 kB       0  [emitted]  main
```

Vérifier que le serveur est bien démarré, et que la page suivante s'affiche correctement [localhost:3000/](http://localhost:3000/)

## Valider le fonctionnement des tests
Pour lancer les tests, utilisez la commande suivante :
``` sh
npm test
```

Pour valider ce point, vous ne devez avoir aucune erreur dans la sortie !
``` sh
> atelier-react-prerequis@0.1.0 test /home/florent/zenika/atelier-react-prerequis
> node node_modules/karma/bin/karma start

INFO [karma]: Karma v0.12.31 server started at http://localhost:9876/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (Linux)]: Connected on socket 7qhopRi1wFpBZBMoS16N with id 16250939
PhantomJS 1.9.8 (Linux): Executed 2 of 2 SUCCESS (0.001 secs / 0.006 secs)
```

### Tips
Pour plus de facilité, vous pouvez installer gulp de manière globale :
``` sh
npm i -g gulp
```
Comme ça, plus besoin d'aller le chercher dans les `node_modules` :bowtie:
