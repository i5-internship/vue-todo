import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Primary from "./views/layouts/Primary";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'primary',
            component: Primary,
            redirect: '/',
            children:[
                {
                    path: '/',
                    name: 'home',
                    component: Home
                }
            ]
        }
    ]
})
