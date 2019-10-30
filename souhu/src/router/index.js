import Vue from 'vue'
import VueRouter from 'vue-router'
// import NbaIndex from '../views/nbaIndex/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'nbayw',
    component: () => import('../views/nbaIndex/index.vue')
  },
  {
    path: '/nbasc',
    name: 'nbasc',
    component: () => import('../views/nbasc/NbaSc.vue')
  },
  {
    path: '/nbaph',
    name: 'nbaph',
    component: () => import('../views/nbaph/NbaPh.vue')
  },
  {
    path: '/nbaplayer',
    name: 'nbaplayer',
    component: () => import('../views/nbaplayer/NbaPlayer.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login2',
    name: 'login2',
    component: () => import('../views/login/login2.vue')
  },
  {
    path: '/zc',
    name: 'zc',
    component: () => import('../views/login/zc.vue')
  },
  // {
  //   path: '/detail/:id',
  //   name: 'detail',
  //   component: () => import('../views/detail/detail.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router