<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <div class="header">
          <h1>Tout les articles</h1>
          <button @click="goToNewArticle" class="btn btn-primary">Nouveau Article</button>
        </div>
      </div>
    </div>

    <div class="container page">
      <ArticleComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ArticleComponent from '@/components/ArticleComponent.vue';

export default defineComponent({
  name: 'ArticleView',
  components: {
    ArticleComponent,
  },
  setup() {
    const router = useRouter();

    const goToNewArticle = () => {
      router.push({ name: 'new-article' });
    };

    return {
      goToNewArticle,
    };
  },
});
</script>

<style scoped>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.article-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Permet de prendre toute la hauteur de l'écran */
  width: 100%;
}

.banner {
  background-color: #1a1a2e;
  padding: 2rem 0;
  margin-bottom: 2rem;
  flex-shrink: 0;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner h1 {
  margin: 0;
  font-size: 2rem;
}

.container.page {
  flex-grow: 1; /* Prend tout l'espace restant disponible */
  padding: 2rem 0;
  overflow-y: auto; /* Si le contenu est trop long, permet de défiler */
}
</style>
