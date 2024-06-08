import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/Detail.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
