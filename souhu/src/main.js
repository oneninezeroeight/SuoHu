import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import  './assets/style.css'
import  './assets/style1.css'
import './assets/style3.css'
import  './assets/style2.css'
Vue.config.productionTip = false

new Vue({
  
  router,

  render: h => h(App),
}).$mount('#app')
