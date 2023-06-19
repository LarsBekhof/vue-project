import { createRouter, createWebHistory } from 'vue-router';
import { LoginPage } from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
  ],
});

export default router;
