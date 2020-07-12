import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


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
    },
    {
        path: '/gadget',
        name: 'Gadget',
        component: () => import('@/views/Gadget')
    },
    {
        path: '/fullPage',
        name: 'FullPage',
        component: () => import('@/views/Fullpage')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
