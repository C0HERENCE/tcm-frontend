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
    path: '/HerbGuide',
    name: 'HerbGuide',
    component: () => import('../views/HerbGuide.vue')
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
    path: '/PrescriptionGuide',
    name: 'PrescriptionGuide',
    component: () => import('../views/PrescriptionGuide.vue')
  },
  {
    path: '/HerbDetail/:id',
    name: 'HerbDetail',
    component: () => import('../views/HerbDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
