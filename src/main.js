import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { Lazyload } from 'vant'

Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
