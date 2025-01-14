import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as any[], // Liste des articles
    errors: [] as string[], // Liste des erreurs
  }),
  actions: {
    async createArticle(articleData: any) {
      try {
        const token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage
        const response = await axios.post('https://realword-api.nouwillcode.com/api/articles', {
          article: {
            title: articleData.title,
            description: articleData.description,
            body: articleData.body,
            tagList: articleData.tagList.split(','),
          },
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`, // Inclure le token dans les en-têtes
          },
        });

        console.log('Article publié avec succès :', response.data);
        this.articles.push(response.data.article); // Ajouter l'article à la liste des articles
      } catch (error: any) {
        console.error('Erreur lors de la publication de l\'article :', error.response?.data || error.message);
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = Object.values(error.response.data.errors).flat() as string[];
        } else {
          this.errors = ['Une erreur est survenue.'];
        }
      }
    },
  },
});