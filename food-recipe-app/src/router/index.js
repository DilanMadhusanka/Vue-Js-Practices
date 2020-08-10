import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import AddSmoothie from '@/components/AddSmoothie'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index
        },
        {
            path: '/add-smoothie',
            name: 'AddSmoothie',
            component: AddSmoothie
        },
    ]
})