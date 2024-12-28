<template>
  <div class="register-form-container">
    <form @submit.prevent="onSubmit" class="register-form">
      <h2>Inscription</h2>
      <div class="form-group">
        <label for="username">Nom d'utilisateur :</label>
        <input id="username" v-model="form.username" type="text" placeholder="Entrez votre nom d'utilisateur" required />
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input id="email" v-model="form.email" type="email" placeholder="Entrez votre email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input id="password" v-model="form.password" type="password" placeholder="Entrez votre mot de passe" required />
      </div>
      <button type="submit" class="submit-button">S'inscrire</button>
    </form>
  </div>
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
/* Conteneur principal */
.register-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a1a2e; /* Noir légèrement violet */
  color: #e0e0e0; /* Texte gris clair */
}

/* Formulaire */
.register-form {
  background-color: #2e2e4d; /* Violet sombre */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Titre du formulaire */
.register-form h2 {
  margin-bottom: 1.5rem;
  color: #b88aff; /* Violet clair */
}

/* Groupes de champs */
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #e0e0e0;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #1a1a2e; /* Noir légèrement violet */
  color: #e0e0e0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus {
  background-color: #2b2b44; /* Violet foncé */
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.6);
  outline: none;
}

/* Bouton de soumission */
.submit-button {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #b88aff; /* Violet clair */
  color: #1a1a2e; /* Noir légèrement violet */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.submit-button:hover {
  background-color: #a06fe4; /* Violet intermédiaire */
  transform: translateY(-2px);
}

.submit-button:active {
  background-color: #8f5dc2; /* Violet plus foncé */
  transform: translateY(0);
}
</style>
