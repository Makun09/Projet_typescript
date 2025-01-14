<template>
    <div class="edit-profile">
      <h1>Modifier le Profil</h1>
      <form @submit.prevent="updateProfile" class="edit-profile-form">
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input id="username" type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="bio">Biographie</label>
          <textarea id="bio" v-model="bio" rows="4" placeholder="Entrez votre biographie"></textarea>
        </div>
        <div class="form-group">
          <label for="image">URL de l'image de profil</label>
          <input id="image" type="url" v-model="image" placeholder="https://example.com/avatar.png" />
        </div>
        <button type="submit" class="save-button">Enregistrer les modifications</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/user';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'EditProfileView',
    setup() {
      const router = useRouter();
      const userStore = useUserStore();
  
      // Pré-remplir les champs avec les données actuelles de l'utilisateur
      const username = ref(userStore.user?.username || '');
      const email = ref(userStore.user?.email || '');
      const bio = ref(userStore.user?.bio || '');
      const image = ref(userStore.user?.image || '');
  
      const updateProfile = async () => {
        // Valider les champs obligatoires
        if (!username.value || !email.value) {
          alert('Le nom d\'utilisateur et l\'email sont obligatoires.');
          return;
        }
  
        if (!userStore.user?.token) {
          alert('Vous devez être connecté pour modifier votre profil.');
          return;
        }
  
        try {
          console.log('Données envoyées :', {
            user: {
              username: username.value,
              email: email.value,
              bio: bio.value,
              image: image.value,
            },
          });
  
          // Requête PUT vers l'API RealWorld pour mettre à jour le profil
          const response = await axios.put(
            'https://realword-api.nouwillcode.com/api/user',
            {
              user: {
                username: username.value,
                email: email.value,
                bio: bio.value,
                image: image.value,
              },
            },
            {
              headers: {
                'Authorization': `Token ${userStore.user?.token}`, // Token pour authentification
                'Content-Type': 'application/json', // En-tête pour garantir un format JSON
              },
            }
          );
  
          // Mise à jour du store utilisateur avec les nouvelles données
          userStore.setUser(response.data.user);
  
          alert('Profil mis à jour avec succès !');
          router.push('/profile'); // Redirection vers la page de profil
        } catch (error: any) {
          if (error.response) {
            console.error('Erreur de l\'API :', error.response.data);
            alert(`Erreur : ${error.response.data.message || 'Une erreur est survenue.'}`);
          } else {
            console.error('Erreur inconnue :', error);
            alert('Une erreur inconnue est survenue.');
          }
        }
      };
  
      return {
        username,
        email,
        bio,
        image,
        updateProfile,
      };
    },
  });
  </script>
  
  <style scoped>
  .edit-profile {
    max-width: 600px;
    margin: 2rem auto;
    background-color: #1a1a2e;
    padding: 2rem;
    border-radius: 10px;
    color: #e0e0e0;
    height: 100vh; /* Prend toute la hauteur de l'écran */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrer le contenu verticalement */
  }
  
  .edit-profile h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #b88aff;
  }
  
  .edit-profile-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #e0e0e0;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #2b2b44;
    color: #e0e0e0;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  textarea {
    resize: none;
  }
  
  .save-button {
    padding: 0.8rem;
    background-color: #b88aff;
    color: #1a1a2e;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .save-button:hover {
    background-color: #a06fe4;
  }
  
  .save-button:active {
    background-color: #8f5dc2;
  }
  </style>
  
  