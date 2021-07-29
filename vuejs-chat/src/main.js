import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/main.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
