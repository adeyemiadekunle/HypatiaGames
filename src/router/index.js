import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Hypatia from '../views/Hypatia.vue'

const route =  [

    {   path: '/',
    name: 'Home',
    component: Home,
},



{
    path: '/hgt',
    name: 'Hypatia',
    component: Hypatia,
},



]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router