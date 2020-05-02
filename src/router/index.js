import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

axios.defaults.baseURL = './mock'
Vue.use(VueRouter)

Vue.prototype.$axios = axios

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/Detail')
    }
]

const router = new VueRouter({
   // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
