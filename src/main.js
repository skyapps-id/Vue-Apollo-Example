import Vue from 'vue'
import apolloProvider from './plugins/apollo'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
