# ANNA App

L'application ANNA (l'Amicale Nationale des Nations Amies) est une interface web permettant de rechercher et d'afficher des informations sur les différentes nations du monde.

## Fonctionnalités

- Affichage de la liste des pays avec des informations de base (nom français, région, drapeau).
- Affichage des détails d'un pays après avoir cliqué sur une vignette.
- Possibilité d'ajouter des pays aux favoris.
- Affichage de la liste des pays favoris avec le nombre total de pays aimés.
- Utilisation de pictogrammes pour mettre en avant certaines informations (capitale, habitants, timezone).

## Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React pour le rendu côté serveur et les fonctionnalités full-stack.
- [axios](https://github.com/axios/axios) - Pour effectuer des requêtes HTTP vers l'API `restcountries`.
- [vitest](https://vitest.dev/) - Framework de test.
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) - Pour les tests de composants React.

## Installation et Exécution

1. Cloner le dépôt :

   ```bash
   git clone <URL_DU_DÉPÔT>
   cd anna-app
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Démarrer l'application :

   ```bash
   npm run dev
   ```

4. Exécuter les tests :
   ```bash
   npm run test
   ```

## Structure du Projet

- `components/` : Composants réutilisables (CountryCard, CountryDetails, FavoriteCountries).
- `countries/` : Pages Next.js (index.js, [cca3]/[cca3].js, favorites/[code].js).
- `public/` : Fichiers statiques (pictogrammes).
- `styles/` : Fichiers CSS ou SASS.
- `__tests__/` : Tests unitaires et de composants.

## Développement

### Composants

- **CountryCard** : Affiche le nom français, la région et le drapeau du pays. Inclut un bouton pour voir les détails.
- **CountryDetails** : Affiche les informations détaillées d'un pays (nom, capitale, timezone, langues, population, région). Inclut un bouton pour ajouter le pays aux favoris.
- **SearchBar** : Bar de recherche pour les pays en fonction de leur nom.

### Pages

- **index.js** : Page d'accueil affichant une liste de `CountryCard`.
- **country/[code].js** : Page de détails d'un pays affichant les informations détaillées avec `CountryDetails`.
- **favorites** : Page affichant les favories.

### Gestion des Favoris

- Utilisation de `useState` pour gérer les pays favoris.
- Stockage des favoris dans `localStorage` pour persistance.

## Remarques

- Le projet utilise `axios` pour récupérer les données de l'API `https://restcountries.com/v3.1/all`.
- Les pictogrammes pour la capitale, les habitants et la timezone sont inclus dans le composant `CountryDetails`.
- Les tests sont réalisés avec `vitest` et `@testing-library/react` pour assurer la fiabilité de l'application.

## Auteur

- **GUIA Ambre** - _Développeur Principal_
