import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Oruga from '@oruga-ui/oruga'
import '@oruga-ui/oruga/dist/oruga.css'

Vue.config.productionTip = false

Vue.use(Oruga);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
