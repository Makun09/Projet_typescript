<template>
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
        <input v-model="article.tagList" type="text" class="form-control" placeholder="Entez un/des tags" />
        <div class="tag-list">
          <span v-for="tag in (article.tagList || '').split(',')" :key="tag" class="tag-default tag-pill">
            <i class="ion-close-round"></i> {{ tag }}
          </span>
        </div>
      </fieldset>
      <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
        Publiez l'article
      </button>
    </fieldset>
    <ul class="error-messages">
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'ArticleForm',
  props: {
    article: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        body: '',
        tagList: '',
      }),
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const article = ref({ ...props.article });
    const errors = ref<string[]>([]);

    watch(() => props.article, (newArticle) => {
      article.value = { ...newArticle };
    });

    const submitForm = async () => {
      try {
        await props.onSubmit(article.value);
      } catch (error: any) {
        console.error('Erreur lors de la soumission de l\'article :', error.response?.data || error.message);
        if (error.response && error.response.data && error.response.data.errors) {
          errors.value = Object.values(error.response.data.errors).flat() as string[];
        } else {
          errors.value = ['Une erreur est survenue.'];
        }
      }
    };

    return {
      article,
      errors,
      submitForm,
    };
  },
});
</script>

<style scoped>
.tag-list {
  margin-top: 0.5rem;
}
.tag-default {
  background-color: #e0e0e0;
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