# Ceci est un brouillon d'idées, de suggestions, de questions

## image

- voir upload images avec symfony pour les produits

- voir droit d'usage pour les images (si on fait une capture d'écran d'une télé samsung pour la mettre sur le site, ça pose problème?)

- format?


### liste de site d'images libre de droit à compléter

https://fr.freepik.com/photos-gratuite/affiche-cadres-verticaux-mur-blanc-vide-interieur-du-salon-fauteuil-velours-bleu-rendu-3d_10451793.htm

https://www.pngegg.com/fr

https://unsplash.com/t/nature

---

## session

- Pas de connexion au site pour remplir et valider un panier pour un utilisateur dans un premier temps (facilite la gestion des users) seulement une connexion pour l'admin, manager?

---

## architecture

- Le front et le back sont dans le même projet ou pas?
sachant que la connexion pour le front à l'api est facilité si tout est dans le même projet, il me semble

> A l'inverse je pense qu'il vaut mieux séparer les 2. Ce n'est pas un problème pour l'accès à l'API, mais surtout pour les histoires de build et de minification il y a moyen que ça soit un bordel si tout est dans le même projet.

---

## type de produit à vendre sur le site

doivent être des produits de consommation cher, les plus vendus, les moins éthiques, polluant, superflu, avec des images du produits disponible, et pas cher sur le site
(ex: le dernière Iphone)

- déterminer une liste exaustive des produits vendus
  (s'inspirer en navigant sur des sites de ecommerces)
  
- trouver quelques produits troll, inutile comme sur wish 

---

## Promo sur le site

- comme cdiscount c'est la fête de la promo tous les jours (mais contrairement à cdiscount, des vraies promo)
(voir algo pour déterminer des promos aléatoires basé sur les dates avec un pourcentages aléatoires)

## design

- partir d'un site e commerce en particulier pour s'inspirer

- j'adore le concept de ce site, on pourrait utiliser le même?
  
  C'est un youtubeur qui a décidé d'ouvrir sa propre agence de com pour les youtubeurs après avoir bossé avec des boîtes sur paris. La plupart déconsidère l'humain, ne maitrise pas le monde de youtube et des réseaux, arbore tout un tas de chiffres qui ne veulent pas dire grand chose, c'est juste pour éblouir le client, faire semblant d'être sérieux et compétent...

  Donc sur son site https://frame55.agency/ quand on arrive sur la home on voit ce qu'il présente selon sa philosophie puis quand on click en bas sur "c'est parti" on voit la version d'un site de com avec la bulshit communication de base.

  Est ce qu'on ne pourrait reprendre ce concept pour notre site, une espèce de site à deux faces, une pour le ecommerce et une pour trouver les produits autrements?
  Avec deux noms très parlant pour les deux faces et une accésibilité, une compréhension très rapide du concept par l'utilisateur?

## mise en ligne

- j'ai cru comprendre qu'avec AWS il n'y avait pas de nom de domaine, juste un accées par l'ip. On se payera un nom de domaine, on l'héberge? Par exemple je suis chez O2Switch, si je rajoute un site l'hébergement est gratuit, il faaut payer le nom de domaine (c'est pas cher du tout). Voir les accées pour tout le monde sur le serveur (en cloisonant l'espace)
