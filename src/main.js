import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import './style/style.scss'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(datePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
