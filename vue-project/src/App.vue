<template>
  <div id="app">
    <header>
      <nav>
        <h1>Bienvenue sur RealWorld SPA</h1>
        <div class="nav-links">
          <router-link to="/" class="button">Accueil</router-link>
          <router-link to="/login" class="button">Connexion</router-link>
          <router-link to="/register" class="button">Inscription</router-link>
          <router-link to="/profile" class="button">Profil</router-link>

        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 - RealWorld SPA. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
/* Global container */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Utiliser toute la hauteur de la fenêtre */
  width: 100%; /* Utiliser toute la largeur de la fenêtre */
  background-color: #1a1a2e; /* Fond noir légèrement violet */
  color: #e0e0e0; /* Couleur du texte gris clair */
  box-sizing: border-box;
  margin: 0; /* Annuler les marges */
  padding: 0; /* Annuler les padding */
}

/* Header */
header {
  background-color: #0f0f1a; /* Gris très foncé */
  color: #b88aff; /* Texte violet clair */
  padding: 1rem;
  text-align: center;
}

header nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.button {
  color: #e0e0e0;
  text-decoration: none;
  border: 1px solid #b88aff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button:hover {
  background-color: #b88aff;
  color: #0f0f1a;
}

/* Main (Vue dynamique) */
main {
  flex: 1; /* Prend tout l'espace vertical restant entre le header et le footer */
  padding: 2rem;
  text-align: center;
}

/* Footer */
footer {
  background-color: #0f0f1a;
  color: #b88aff;
  text-align: center;
  padding: 1rem;
}
</style>
