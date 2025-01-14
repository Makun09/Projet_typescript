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
          <router-link to="/article" class="button">Article</router-link>

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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
}

header {
  background-color: #1a1a2e;
  padding: 1rem;
}

header h1 {
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-links .button {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links .button:hover {
  background-color: #fff;
  color: #282c34;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ajout pour s'assurer que le contenu prend toute la largeur */
  padding: 2rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #1a1a2e;
  color: #fff;
}
</style>

