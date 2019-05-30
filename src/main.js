import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store'
import VeeValidate from 'vee-validate';
import * as CN from '@/locale/veeValidate/cn';
import VueI18n from 'vue-i18n'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import '@/icons'
import { Lazyload } from 'vant'

Vue.use(Lazyload,{
  loading: require('./assets/images/lazy_img.gif')
})

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'CN',
})

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    CN
  }
});

Vue.use(VueTouchRipple, /* {
  // default global options
  color: '#fff',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
} */)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
