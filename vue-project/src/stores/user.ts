import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    user: null as any | null, // Informations utilisateur
  }),
  actions: {
    setUser(userData: any) {
      this.user = userData;
      this.token = userData.token;
      localStorage.setItem('userToken', userData.token); // Persister le token
    },
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('userToken');
    },
  },
});

