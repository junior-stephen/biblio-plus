import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // <-- Ajoute cette ligne

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // <-- Vérifie que c'est bien HomeView ici
    },
    // ... autres routes
  ]
})

export default router