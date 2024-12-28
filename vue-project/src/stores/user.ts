import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | {
      email: string;
      token: string;
      username: string;
      bio: string | null;
      image: string | null;
    },
  }),
  actions: {
    login(userData: { email: string; token: string; username: string; bio: string; image: string }) {
      this.user = userData;
    },
    logout() {
      this.user = null;
    },
  },
});
