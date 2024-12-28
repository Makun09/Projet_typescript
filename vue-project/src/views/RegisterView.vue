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
          const response = await fetch('https://api.realworld.io/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: form }),
          });
  
          if (!response.ok) {
            throw new Error('Échec de l’inscription');
          }
  
          const data = await response.json();
          console.log('Compte créé avec succès, données reçues :', data);
  
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
          console.error('Erreur lors de l’inscription :', error);
          alert('Échec de la création du compte. Vérifiez vos informations.');
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
  