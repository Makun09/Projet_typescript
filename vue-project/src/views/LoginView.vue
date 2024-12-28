<template>
  <div>
    <h1>Page de Connexion</h1>
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user'; // Store Pinia
import axios from 'axios'; // Import Axios

export default defineComponent({
  name: 'LoginView',
  components: { LoginForm },
  setup() {
    const router = useRouter();
    const userStore = useUserStore(); // Utiliser Pinia pour stocker l'utilisateur

    const handleLogin = async (credentials: { email: string; password: string }) => {
      console.log('Tentative de connexion avec :', credentials);

      try {
        // Appel API RealWorld pour la connexion avec Axios
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://api.realworld.io/api/users/login', {
          user: credentials,
        });


        const data = response.data;
        console.log('Connexion réussie, données reçues :', data);

        // Enregistrer les informations utilisateur dans le store
        userStore.setUser({
          email: data.user.email,
          token: data.user.token,
          username: data.user.username,
          bio: data.user.bio,
          image: data.user.image,
        });

        // Redirection vers la page d'accueil ou une autre page
        router.push('/');
      } catch (error: any) {
        console.error('Erreur lors de la connexion :', error);
        alert('Connexion échouée. Vérifiez vos informations.');
      }
    };

    return { handleLogin };
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
