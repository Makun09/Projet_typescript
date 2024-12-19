lien du trello: https://trello.com/invite/b/6764052d8d47fd6e358cef45/ATTI397e4568dd335ce03fe12753f5956bd8A2243D27/projettypescript

Projet Electif – Framework et TypeScript

Ce document explique les étapes pour réaliser le projet de Single Page Application (SPA) basé sur la RealWorld API.

Présentation du projet

Le but est de créer une SPA intégrant une API simulant un blog (à travers la RealWorld API).
Les principales fonctionnalités à implémenter incluent :

Gestion des utilisateurs (inscription, connexion, profil).

Gestion des articles (CRUD, filtres, favoris).

Gestion des commentaires (ajout, lecture, suppression).

Liste des tags.

L’API est accessible ici : https://realword-api.nouwillcode.com/.
Documentation : https://realworld-docs.netlify.app/introduction/.

Fonctionnalités demandées

Connexion utilisateur.

Page « Voir tous les articles ».

Page « Voir un article ».

Ajout d’un article en favoris.

Une fonctionnalité au choix :

Gestion des commentaires.

Filtres sur les articles.

Ajout ou suppression en favoris.

Technologies à utiliser

TypeScript (obligatoire).

Vue.js (framework principal).

Pinia (state management).

Vue Router (gestion des routes).

Axios (requêtes HTTP).

Consignes techniques

Utiliser les concepts Vue.js tels que ref(), watch(), gestion des événements, cycles de vie des composants.

Implémenter un style cohérent (libre mais noté).

Etapes de réalisation

1. Comprendre l’API

Lire la documentation de l’API (lien).

Tester les différents endpoints avec un outil comme Postman.

2. Configurer l’environnement

Créer un projet Vue.js avec TypeScript :

npm init vue@latest

Installer les dépendances :

npm install pinia vue-router axios

3. Planifier le travail

Découper les fonctionnalités principales en composants Vue :

Authentification : formulaire de connexion.

Liste des articles : affichage des articles avec filtres.

Détails d’un article : affichage d’un article et ses commentaires.

Favoris : bouton pour ajouter/enlever un article des favoris.

4. Implémenter les composants

Créer des routes dans vue-router.

Utiliser Pinia pour gérer les états globaux (ex. : utilisateur connecté, liste des articles).

Faire les appels API avec Axios.

5. Tester les fonctionnalités

Vérifier chaque fonctionnalité : connexion, affichage des articles, ajout en favoris, etc.

Tester les cas limites (ex. : erreurs d’API).

6. Améliorer l’interface utilisateur

Assurer une bonne expérience utilisateur avec un design ergonomique.

Implémenter un style responsive.

7. Soutenance

Documenter le travail réalisé.

Préparer une démonstration fonctionnelle.

Barème d’évaluation

Note collective

Qualité de la soutenance : 4 points.

Respect du cahier de charges : 4 points.

Fonctionnalité au choix : 2 points.

Respect des consignes techniques : 4 points.

Note individuelle

Implication dans le projet : 2 points.

Tâche réalisée : 2 points.

Participation à la soutenance : 2 points.

Note : Si la note individuelle est inférieure à la moyenne, la note collective sera divisée par deux.
