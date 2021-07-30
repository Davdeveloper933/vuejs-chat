import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "../views/Home";
import History from "../views/History";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/history',
        name:'History',
        component: History
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router