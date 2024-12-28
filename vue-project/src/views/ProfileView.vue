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
  .profile-view {
    text-align: center;
    padding: 2rem;
  }
  </style>
  