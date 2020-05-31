import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from '../store/index'
import router from '../router/index'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'
import VeeValidate from 'vee-validate'

import '../metrics'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

Vue.use(YmapPlugin)
Vue.use(VueClipboard)



router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
