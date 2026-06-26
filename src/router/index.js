import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: PortfolioPage },
    { path: "/services", name: "services", component: ServicesPage },
  ],
});