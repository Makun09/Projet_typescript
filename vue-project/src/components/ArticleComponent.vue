<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>Tout les articles</h1>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-12">
          <div v-if="loading" class="loading">Chargement des articles...</div>
          <div v-else>
            <div v-for="article in articles" :key="article.slug" class="article-preview">
              <div class="article-meta">
                <a :href="'/profile/' + article.author.username">
                  <img :src="article.author.image" />
                </a>
                <div class="info">
                  <a :href="'/profile/' + article.author.username" class="author">{{ article.author.username }}</a>
                  <span class="date">{{ new Date(article.createdAt).toLocaleDateString() }}</span>
                </div>
                <button class="btn btn-sm btn-outline-secondary">
                  <i class="ion-plus-round"></i>
                  &nbsp; Follow {{ article.author.username }}
                </button>
                &nbsp;&nbsp;
                <button class="btn btn-sm btn-outline-primary">
                  <i class="ion-heart"></i>
                  &nbsp; Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
                </button>
              </div>
              <router-link :to="{ name: 'article-detail', params: { slug: article.slug } }" class="preview-link">
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <span>Read more...</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export interface Author {
  username: string;
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export default defineComponent({
  name: 'ArticleComponent',
  setup() {
    const articles = ref<Article[]>([]);
    const loading = ref(true);

    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://realword-api.nouwillcode.com/api/articles');
        articles.value = response.data.articles;
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchArticles);

    return {
      articles,
      loading,
    };
  },
});
</script>

<style scoped>
.article-page {
  padding: 2rem;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #b88aff;
}

.article-preview {
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
}

.article-meta {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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

.preview-link {
  text-decoration: none;
  color: inherit;
}

.preview-link h1 {
  font-size: 1.5rem;
  margin: 0;
}

.preview-link p {
  color: #999;
}

.preview-link span {
  color: #5cb85c;
}
</style>