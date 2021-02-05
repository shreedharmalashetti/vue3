import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "[1]" */ '../views/Home.vue')
  },
  {
    path: '/chat/:uid',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "[4]" */ '../views/Chat.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/telegram',
    name: 'Telegram',
    component: () => import(/* webpackChunkName: "[3]" */ '../views/Telegram.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/:auth',
    name: 'User',
    component: () => import(/* webpackChunkName: "[2]" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
