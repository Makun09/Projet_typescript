import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ProfileView from '@/views/ProfileView.vue'; // Import de la vue Profil
import EditProfileView from '@/views/EditProfileView.vue';
import ArticleView from '@/views/ArticleView.vue';
import ArticleComponent from '@/components/ArticleComponent.vue';
import ArticleForm from '@/components/ArticleForm.vue';
import ArticleDetailView from '@/views/ArticleDetailView.vue';
import EditArticleView from '@/views/EditArticleView.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/profile/edit', name: 'edit-profile', component: EditProfileView }, 
  { path: '/article', name: 'article', component: ArticleView},
  { path: '/articles', name: 'articles', component: ArticleComponent}, 
  { path: '/new-article', name: 'new-article', component: ArticleForm},
  { path: '/article/:slug', name: 'article-detail', component: ArticleDetailView },
  { path: '/article/:slug/edit', name: 'edit-article', component: EditArticleView }, // Nouvelle route
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

