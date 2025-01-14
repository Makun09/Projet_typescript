<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh; /* Assure que le conteneur prend toute la hauteur de l'écran */
    display: flex;
    flex-direction: column; /* Organiser le contenu de manière verticale */
    justify-content: center; /* Centrer le contenu verticalement */
    padding: 2rem; /* Espacement interne, si nécessaire */
  }
}
</style>

