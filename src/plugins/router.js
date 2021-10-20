import { createWebHistory, createRouter } from "vue-router";

import NewsPage from "@/modules/news/NewsPage";
import NewsEditPage from "@/modules/news/NewsEditPage";
import NewsFormPage from "@/modules/news/components/NewsForm";
import DocsPage from "@/modules/docs/DocsPage";
import PaymentPage from "@/modules/docs/PaymentPage";
import ContactsPage from "@/modules/docs/ContactsPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: NewsPage
  },
  {
    path: "/news",
    name: "news",
    component: NewsPage
  },
  {
    path: "/news/new",
    name: "news-create",
    component: NewsEditPage
  },
  {
    path: "/news/:id",
    name: "news-edit",
    component: NewsEditPage
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
    path: "/contacts",
    name: "contacts",
    component: ContactsPage
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
