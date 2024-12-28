<template>
    <div class="profile">
      <h2>Profil de l'utilisateur</h2>
      <div class="profile-info">
        <p><strong>Nom :</strong> John Doe</p>
        <p><strong>Email :</strong> john.doe@example.com</p>
      </div>
      <button @click="editProfile" class="edit-button">Modifier le profil</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProfileComponent',
    methods: {
      editProfile() {
        // Ajoute ici la logique pour modifier le profil.
        alert("Modification du profil en cours...");
      },
    },
  });
  </script>
  
  <style scoped>
  .profile {
    background-color: #1a1a2e;
    color: #e0e0e0;
    padding: 2rem;
    border-radius: 10px;
    max-width: 600px;
    margin: 2rem auto;
    text-align: left;
  }
  
  .profile-info {
    margin-bottom: 1rem;
  }
  
  .edit-button {
    background-color: #b88aff;
    color: #0f0f1a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .edit-button:hover {
    background-color: #a06fe4;
  }
  </style>
  