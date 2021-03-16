import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menu.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
