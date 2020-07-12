import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAnimateNumber from 'vue-animate-number'

Vue.use(VueAnimateNumber)

axios.defaults.baseURL = './mock'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
