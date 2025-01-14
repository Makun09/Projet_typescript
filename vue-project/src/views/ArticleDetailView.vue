<template>
  <div v-if="article" class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <a :href="'/profile/' + article.author.username">
            <img :src="article.author.image" />
          </a>
          <div class="info">
            <a :href="'/profile/' + article.author.username" class="author">{{ article.author.username }}</a>
            <span class="date">{{ new Date(article.createdAt).toLocaleDateString() }}</span>
          </div>
          <router-link :to="{ name: 'edit-article', params: { slug: article.slug } }" class="btn btn-sm btn-outline-secondary">
            <i class="ion-edit"></i>
            &nbsp; Edit Article
          </router-link>
          <button @click="confirmDelete" class="btn btn-sm btn-outline-danger">
            <i class="ion-trash-a"></i>
            &nbsp; Delete Article
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.body }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">Chargement de l'article...</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'ArticleDetailView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const article = ref<any>(null);
    const slug = route.params.slug;
    const isDeleting = ref(false); 

    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://realword-api.nouwillcode.com/api/articles/${slug}`);
        article.value = response.data.article;
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'article :', error);
      }
    };

    

    const deleteArticle = async () => {
      const token = localStorage.getItem('userToken'); 
      console.log('Token utilisé :', token);


      if (!slug) {
        console.error("Le slug de l'article est introuvable.");
        return;
      }

      try {
        const response = await axios.delete(`https://realword-api.nouwillcode.com/api/articles/${slug}`, {
          headers: {
            'Authorization': `Token ${token}`, 
          },
        });
        console.log('Article supprimé avec succès', response.data);
      } catch (error: any) {
          if (axios.isAxiosError(error)) {
            console.error('Erreur Axios :', error.response?.data || error.message);
            console.error('Code de statut :', error.response?.status || 'Non disponible');
          } else {
            console.error('Erreur inconnue :', error);
          }
        }
      
    };



    const confirmDelete = () => {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        isDeleting.value = true;
        deleteArticle();
      }
    };

    onMounted(fetchArticle);

    return {
      article,
      confirmDelete,
      isDeleting,
      deleteArticle,
    };
  },
});
</script>


<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

.article-page {
  display: flex;
  flex-direction: column;
  height: 100%; /* Assurer que l'article occupe toute la hauteur de l'écran */
  padding: 2rem 0;
}

.banner {
  background-color: #1a1a2e;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.container {
  flex-grow: 1; /* Permet à .container de prendre tout l'espace restant */
}

.article-meta {
  display: flex;
  align-items: center;
}

.article-meta img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.article-meta .info {
  flex-grow: 1;
}

.article-meta .author {
  font-weight: bold;
  color: #5cb85c;
}

.article-meta .date {
  color: #bbb;
}

.article-content {
  padding: 2rem 0;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #b88aff;
}

.footer {
  text-align: center;
  margin-top: auto;
}
</style>
