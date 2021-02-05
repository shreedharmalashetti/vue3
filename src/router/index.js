import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "[request]" */ '../views/Home.vue')
  },
  {
    path: '/chat/:uid',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "[request]" */ '../views/Chat.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/telegram',
    name: 'Telegram',
    component: () => import(/* webpackChunkName: "[request]" */ '../views/Telegram.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/:auth',
    name: 'User',
    component: () => import(/* webpackChunkName: "[request]" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
