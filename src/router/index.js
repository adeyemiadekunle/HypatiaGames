import {createRouter, createWebHistory} from 'vue-router'

const route =  [

    {   path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue') 
},



{
    path: '/hgt',
    name: 'Hypatia',
    component: ()=> import ('../views/Hypatia.vue')
},


]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router