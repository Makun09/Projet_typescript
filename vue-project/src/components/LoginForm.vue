<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <h2>Connexion</h2>
        <div>
          <label for="email">Email :</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Mot de passe :</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'LoginForm',
    emits: ['login'],
    setup(_, { emit }) {
      const email = ref('');
      const password = ref('');
  
      const handleSubmit = () => {
        // Émet les données de connexion vers le parent
        emit('login', { email: email.value, password: password.value });
      };
  
      return { email, password, handleSubmit };
    },
  });
  </script>
  
  <style scoped>
  /* Ajoute du style selon tes besoins */
  form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  