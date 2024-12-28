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

export default defineComponent({
  name: 'LoginView',
  components: { LoginForm },
  setup() {
    const router = useRouter();
    const userStore = useUserStore(); // Utiliser Pinia pour stocker l'utilisateur

    const handleLogin = async (credentials: { email: string; password: string }) => {
      console.log('Tentative de connexion avec :', credentials);

      try {
        // Appel API RealWorld pour la connexion
        const response = await fetch('https://api.realworld.io/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user: credentials }), // Adapter au format RealWorld
        });

        if (!response.ok) {
          throw new Error('Échec de la connexion');
        }

        const data = await response.json();
        console.log('Connexion réussie, données reçues :', data);

        // Enregistrer les informations utilisateur dans le store
        userStore.login({
          email: data.user.email,
          token: data.user.token,
          username: data.user.username,
          bio: data.user.bio,
          image: data.user.image,
        });

        // Redirection vers la page d'accueil ou une autre page
        router.push('/');
      } catch (error) {
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
