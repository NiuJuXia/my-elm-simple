import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

import './common/scss/icon.css'
import './register'
Vue.config.productionTip = false

new Vue({
  
  render: h => h(App)
}).$mount('#app')
