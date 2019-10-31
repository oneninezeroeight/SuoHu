import Vue from 'vue'
import VueRouter from 'vue-router'
// import NbaIndex from '../views/nbaIndex/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/nbayw',
  name: 'nbayw',
  component: () => import('../views/nbaIndex/index.vue')
},
{
  path: '/cbayw',
  name: 'cbayw',
  component: () => import('../views/nbaIndex/cbaindex.vue')
},
{
  path: '/nbasc',
  name: 'nbasc',
  component: () => import('../views/nbasc/NbaSc.vue')
},
{
  path: '/nbaph ',
  name: 'nbaph',
  component: () => import('../views/nbaph/NbaPh.vue')
},
{
  path: '/nbaplayer',
  name: 'nbaplayer',
  component: () => import('../views/nbaplayer/NbaPlayer.vue')
},
{
  path: '/',
  name: 'sporthome',
  component: () => import('../views/SportNews/SportNews.vue')
},
{
  path: '/cbasc',
  name: 'cbasc',
  component: () => import('../views/nbasc/CbaSc.vue')
},
{
  path: '/cbaph ',
  name: 'cbaph',
  component: () => import('../views/nbaph/CbaPh.vue')
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
{
  path: '/details',
  name: 'details',
  component: () => import('../views/details/details.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router