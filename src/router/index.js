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
    path: '/TcmGuide',
    name: 'TcmGuide',
    component: () => import('../views/TcmGuide.vue')
  },
  {
    path: '/HealthGuide',
    name: 'HealthGuide',
    component: () => import('../views/HealthGuide.vue')
  },
  {
    path: '/SymptomGuide',
    name: 'SymptomGuide',
    component: () => import('../views/SymptomGuide.vue')
  },
  {
    path: '/CasesGuide',
    name: 'CasesGuide',
    component: () => import('../views/CasesGuide.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
