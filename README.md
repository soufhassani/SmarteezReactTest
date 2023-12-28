# Une Petite Documentation

**Tout d'abord, je suis très heureux que mon profil vous convienne.**
Ce projet est un test d'application pour l'entreprise `Smarteez` dans le but de créer un compteur qui s'incrémente lorsqu'on clique sur le bouton plus et se décrémente lorsqu'on clique sur le bouton moins. En conditions :
* Si le numéro devient supérieur à 0, il doit être affiché en bleu.
* Si le numéro devient inférieur à 0, il doit être affiché en rouge.

Ansi que, j'ai essayer d'appliquer le maximum possible des technique ES6 et quelque autre technique React:
**J'ai Appliqué :**
* La technique de Component, et manipuler les props(les parametres).
* Utilisation de React hook useState, pour le but de gerer change l'etat de la varriable `Counter` en utilisont la fonction `setCounter`.
* Utilisation de `ternary operator`, dans le cas de la varriable `addCounterClass` qui vas nous returner comme value `blue`, `rouge` ou vide pour le but de change la class html de `Counter` pour change la sa couleur en CSS.
* Utilisation de `Object distructuring` pour le cas de passer les parametre au Component `<Button />` et aussi `Array distructuring` pour la case de hook `useState`.
* Ajout d'une animation de click lorsque l'utilisateur click le button, pour qu'il apprécier le sentiment de satisfaction lors de click.

## Pour avoir le projet dans votre machine

Pour utiliser ce test, veuillez copier [https://github.com/soufhassani/SmarteezReactTest.git](https://github.com/soufhassani/SmarteezReactTest.git) et utiliser la commande suivante dans le terminal :
`git clone https://github.com/soufhassani/SmarteezReactTest.git`

## Scripts disponibles

**Dans le répertoire du projet, vous pouvez exécuter :**

`npm start`

Exécute l'application en mode développement.\
Ouvre [http://localhost:3000](http://localhost:3000) pour la visualiser dans votre navigateur.

La page se rechargera lorsque vous apportez des modifications.\
Vous pouvez également voir les erreurs de style dans la console.

**J'ai supprimé certains scripts dont nous n'avons pas besoin pour ce test :**

`npm test`
`npm run build`
`npm run eject`

## Merci
