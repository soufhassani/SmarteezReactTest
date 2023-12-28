# Une Petite Documentation

**Tout d'abord, je suis très heureux que mon profil vous convienne.**
Ce projet est un test d'application pour l'entreprise `Smarteez` dans le but de créer un compteur qui s'incrémente lorsqu'on clique sur le bouton plus et se décrémente lorsqu'on clique sur le bouton moins. En conditions :
* Si le numéro devient supérieur à 0, il doit être affiché en bleu.
* Si le numéro devient inférieur à 0, il doit être affiché en rouge.

De plus, j'ai essayé d'appliquer le maximum possible de techniques ES6 et quelques autres techniques React :
**J'ai Appliqué :**
* La technique des composants et la manipulation des props (les paramètres).
* Utilisation du React hook useState, dans le but de gérer le changement de l'état de la variable `Counter` en utilisant la fonction `setCounter`.
* Utilisation de l'opérateur ternaire, dans le cas de la variable `addCounterClass` qui nous retournera comme valeur `blue`, `rouge` ou vide dans le but de changer la classe HTML de `Counter` pour changer sa couleur en CSS.
* Utilisation de la déstructuration d'objet pour le passage des paramètres au composant `<Button />` et également de la déstructuration de tableau pour le cas du hook `useState`.
* Ajout d'une animation de clic lorsque l'utilisateur clique sur le bouton, pour qu'il apprécie le sentiment de satisfaction lors du clic.

## Pour obtenir le projet sur votre machine

Pour utiliser ce test, veuillez copier [https://github.com/soufhassani/SmarteezReactTest.git](https://github.com/soufhassani/SmarteezReactTest.git) et utilisez la commande suivante dans le terminal :
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
