<template>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Nom d'utilisateur</label>
        <input id="username" v-model="form.username" type="text" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input id="password" v-model="form.password" type="password" required />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'RegisterForm',
    emits: ['register'],
    setup(_, { emit }) {
      const form = ref({
        username: '',
        email: '',
        password: '',
      });
  
      const onSubmit = () => {
        emit('register', { ...form.value });
      };
  
      return { form, onSubmit };
    },
  });
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  
  div {
    margin-bottom: 1rem;
  }
  </style>
  