import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '../src/components/PageHome.vue';

const routes = [{ path: '/', name: 'Home', component: PageHome }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
