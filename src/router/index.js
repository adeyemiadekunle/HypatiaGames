import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Hypatia from '../views/Hypatia.vue';
import NotFound from '../views/NotFound.vue'

const route = [
  { path: '/', name: 'Home', component: Home },

  {
    path: '/hgt',
    name: 'Hypatia',
    component: Hypatia,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
