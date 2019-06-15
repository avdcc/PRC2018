import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
