import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import i18n from './services/i18n/i18n'
import ApiService from '@/services/api.service'

Vue.config.productionTip = false

ApiService.init()

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
