import { createWebHistory, createRouter } from "vue-router";

import NewsPage from '@/modules/news/NewsPage';
import DocsPage from '@/modules/docs/DocsPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: NewsPage
  },
  {
    path: '/docs',
    name: 'docs',
    component: DocsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
