//bootstrap vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//toastr
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueToastr from '@deveodk/vue-toastr'
import VueSweetalert2 from 'vue-sweetalert2';

//import bootstrap vue
import BootstrapVue from 'bootstrap-vue'

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueToastr)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
