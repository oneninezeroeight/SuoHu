import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style.css'
import './assets/style1.css'
import './assets/style3.css'
import './assets/style2.css'
import './assets/NBA-teams.css'
import './assets/NBA-teams3.css'
import './assets/Sport-League.css'
import './assets/NBAplayer.css'
Vue.config.productionTip = false

new Vue({

  router,

  render: h => h(App),
}).$mount('#app')
