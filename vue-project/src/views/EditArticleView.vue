<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>

          <form @submit.prevent="submitForm">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Titre de l'Article" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="De quoi parle votre article?" />
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Ecrivez votre article (en markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="newTag"
                  type="text"
                  class="form-control"
                  placeholder="Entrez un tag et appuyez sur Entrée"
                  @keyup.enter="addTag"
                />
                <div class="tag-list">
                  <span
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                    class="tag-default tag-pill"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i> {{ tag }}
                  </span>
                </div>
              </fieldset>


              <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
                Mettre à jour l'article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'EditArticleView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const article = ref<any>({
      title: '',
      description: '',
      body: '',
      tagList: '',
    });
    const errors = ref<string[]>([]);
    const slug = route.params.slug;

    const newTag = ref('');

    const addTag = () => {
      if (newTag.value.trim() && !article.value.tagList.includes(newTag.value.trim())) {
        article.value.tagList.push(newTag.value.trim());
        newTag.value = '';
      }
    };

    const removeTag = (index: number) => {
      article.value.tagList.splice(index, 1);
    };



    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://realword-api.nouwillcode.com/api/articles/${slug}`);
        article.value = response.data.article;
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'article :', error);
      }
    };

      const submitForm = async () => {
        try {
          const token = localStorage.getItem('userToken');
          const response = await axios.put(
            `https://realword-api.nouwillcode.com/api/articles/${slug}`,
            {
              article: {
                title: article.value.title,
                description: article.value.description,
                body: article.value.body,
                tagList: article.value.tagList, // Directement envoyer le tableau
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
              },
            }
          );

          console.log('Article mis à jour avec succès :', response.data);
          router.push({ name: 'article-detail', params: { slug: response.data.article.slug } });
        } catch (error: any) {
          console.error('Erreur lors de la mise à jour de l\'article :', error.response?.data || error.message);
          if (error.response && error.response.data && error.response.data.errors) {
            errors.value = Object.values(error.response.data.errors).flat() as string[];
          } else {
            errors.value = ['Une erreur est survenue.'];
          }
        }
      };


    onMounted(fetchArticle);

    return {
      article,
      errors,
      newTag, // Ajoutez cette ligne
      addTag, // Ajoutez cette ligne
      removeTag, // Ajoutez cette ligne
      submitForm,
    };

  },
});
</script>

<style scoped>
.editor-page {
  padding: 2rem 0;
  height: 100vh; /* Prend toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
}

.tag-list {
  margin-top: 0.5rem;
}

.tag-default {
  background-color: #1a1a2e;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
}

.tag-pill {
  display: flex;
  align-items: center;
}

.error-messages {
  color: red;
  list-style-type: none;
  padding: 0;
}
</style>
