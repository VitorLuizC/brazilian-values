import Vue from 'vue'
import App from './App'
import Util from '../src'

Vue.use(Util, {
  validations: true,
  formaters: true,
  formatFilters: true
})

const vue = new Vue({
  render: h => h(App)
})

vue.$mount('#app')
