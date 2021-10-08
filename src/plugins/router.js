import { createWebHistory, createRouter } from "vue-router";

import NewsPage from "@/modules/news/NewsPage";
import NewsFormPage from "@/modules/news/NewsFormPage";
import DocsPage from "@/modules/docs/DocsPage";
import PaymentPage from "@/modules/docs/PaymentPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: NewsPage
  },

  {
    path: "/payment",
    name: "payment",
    component: PaymentPage
  },
  {
    path: "/docs",
    name: "docs",
    component: DocsPage
  },
  {
    path: "/news/edit",
    name: "news.create",
    component: NewsFormPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
