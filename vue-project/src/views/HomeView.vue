<template>
  <div class="home">
    <h2>Accueil</h2>
    <p>Bienvenue dans votre application SPA RealWorld !</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: #e0e0e0;
  text-align: center;
  padding: 2rem;
}
</style>

