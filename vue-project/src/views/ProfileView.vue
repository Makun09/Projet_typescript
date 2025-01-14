<template>
    <div class="profile-view">
      <h1>Page de Profil</h1>
      <ProfileComponent />
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import ProfileComponent from '@/components/ProfileComponent.vue';
  
  export default defineComponent({
    name: 'ProfileView',
    components: {
      ProfileComponent,
    },
  });
</script>
  
<style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .profile-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Prend toute la hauteur de l'écran */
    width: 100%; /* Prend toute la largeur de l'écran */
    text-align: center;
    padding: 2rem;
    background-color: #1a1a2e;
  }
</style>

  