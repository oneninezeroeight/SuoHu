import Vue from 'vue'
import VueRouter from 'vue-router'
import NbaIndex from '../views/nbaIndex/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'NbaIndex',
    component: NbaIndex
  },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('../views/contact/contact.vue')
  // },
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