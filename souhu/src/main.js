import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style.css'
import './assets/style1.css'
import './assets/style3.css'
import './assets/NBA-teams.css'
import './assets/NBA-teams3.css'
import './assets/Sport-League.css'
import './assets/NBAplayer.css'
import './assets/Sport-Home-Header.css'
import './assets/Sport-Home-League.css'
import './assets/Sport-Home-News.css'
// import './assets/Sport-Home-News2.css'
import './assets/Sport-Home-News3.css'
import './assets/Sport-Home-News4.css'
import './assets/Sport-Home-Li.css'
import './assets/Sport-Home-images.css'
import './assets/Headers.css'
import 'weui'
Vue.config.productionTip = false

new Vue({

  router,


  render: h => h(App),
}).$mount('#app')
