import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/chat/:uid',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/telegram',
    name: 'Telegram',
    component: () => import('../views/Telegram.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user/:auth',
    name: 'User',
    component: () => import('../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
