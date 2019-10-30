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
  path: '/nbasc',
  name: 'nbasc',
  component: () => import('../views/nbasc/NbaSc.vue')
},
{
  path: '/  ',
  name: 'nbaph',
  component: () => import('../views/nbaph/NbaPh.vue')
},
{
  path: '/nbaplayer',
  name: 'nbaplayer',
  component: () => import('../views/nbaplayer/NbaPlayer.vue')
},
{
  path: '/slide',
  name: 'slide',
  component: () => import('../components/Slide/Slide.vue')
},
{
  path: '/',
  name: 'sporthome',
  component: () => import('../views/SportNews/SportNews.vue')
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