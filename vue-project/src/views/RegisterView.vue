// Dans votre fichier RegisterView.vue

<template>
  <div>
    <h1>Créer un compte</h1>
    <RegisterForm @register="handleRegister" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RegisterForm from '../components/RegisterForm.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import axios from 'axios';

export default defineComponent({
  name: 'RegisterView',
  components: { RegisterForm },
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const handleRegister = async (form: { username: string; email: string; password: string }) => {
      console.log('Tentative de création de compte avec :', form);

      try {
        // Appel API RealWorld pour l'inscription
        const response = await axios.post('https://realword-api.nouwillcode.com/api/users', { user: form }, {
          headers: { 'Content-Type': 'application/json' }
        });

        // Vérifier si la réponse a échoué avec un statut HTTP non 2xx
        if (response.status !== 200) {
          throw new Error('Échec de l’inscription');
        }

        const data = response.data; // Axios gère déjà la réponse JSON
        console.log('Compte créé avec succès, données reçues :', data);

        // Enregistrer les informations utilisateur dans le store
        userStore.setUser({
          email: data.user.email,
          token: data.user.token,
          username: data.user.username,
        });

        // Redirection vers la page d'accueil ou une autre page
        router.push('/');
    } catch (error: any) {
      console.error('Erreur lors de l’inscription :', error);
      if (error.response) {
        console.error('Réponse de l\'API :', error.response.data);
        alert(`Erreur API: ${error.response.status} - ${error.response.data}`);
      } else {
        alert('Échec de la création du compte. Vérifiez vos informations.');
      }
    }
    };

    return { handleRegister };
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
