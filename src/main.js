import Vue from 'vue'
import App from './App.vue'
import router from './router'
import appCore from './plugins/appCore'

Vue.config.productionTip = false

Vue.use(appCore);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
