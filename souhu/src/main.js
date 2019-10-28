import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Styel from './assets/style.css'
import Styel1 from './assets/style1.css'
import Styel3 from './assets/style3.css'
import Styel2 from './assets/style2.css'
Vue.config.productionTip = false

new Vue({
  router,
  Styel,
  Styel1,
  Styel2,
  Styel3,
  render: h => h(App),
}).$mount('#app')
