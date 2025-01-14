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

      // Préparation du payload
      const payload = {
        user: {
          username: form.username,
          email: form.email,
          password: form.password,
        },
      };
      console.log('Données envoyées au serveur :', payload);

      try {
        // Requête POST vers l'API RealWorld
        const response = await axios.post(
          'https://realword-api.nouwillcode.com/api/users', 
          payload, 
          {
            headers: {
              'Content-Type': 'application/json', // Définir le type de contenu
            },
          }
        );

        // Vérification et traitement de la réponse
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          console.log('Compte créé avec succès, données reçues :', data);

          // Mise à jour du store utilisateur
          userStore.setUser({
            email: data.user.email,
            token: data.user.token,
            username: data.user.username,
          });

          // Redirection après succès
          router.push('/');
        } else {
          throw new Error(`Échec de l'inscription avec statut HTTP ${response.status}`);
        }
      } catch (error: any) {
        console.error('Erreur lors de l’inscription :', error.response?.data || error.message);
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

.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Assure que le conteneur prend toute la largeur */
  padding: 2rem;
  background-color: #1a1a2e;
}
</style>
