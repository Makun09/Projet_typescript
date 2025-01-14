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
import { useUserStore } from '../stores/user';
import axios from 'axios';

export default defineComponent({
  name: 'LoginView',
  components: { LoginForm },
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const handleLogin = async (credentials: { email: string; password: string }) => {
      console.log('Tentative de connexion avec :', credentials);

      const payload = {
        user: {
          email: credentials.email,
          password: credentials.password,
        },
      };
      console.log('Données envoyées au serveur :', payload);

      try {
        const response = await axios.post(
          'https://realword-api.nouwillcode.com/api/users/login',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const data = response.data;
        console.log('Connexion réussie, données reçues :', data);

        userStore.setUser({
          email: data.user.email,
          token: data.user.token,
          username: data.user.username,
          bio: data.user.bio,
          image: data.user.image,
        });

        router.push('/');
      } catch (error: any) {
        console.error('Erreur lors de la connexion :', error.response?.data || error.message);
        alert('Connexion échouée. Vérifiez vos informations.');
      }
    };

    return { handleLogin };
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>
