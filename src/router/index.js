import {createRouter, createWebHistory} from 'vue-router'

const route =  [

    {   path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue') 
},

{
    path: '/about',
    name: 'About',
    component:() => import('../views/About.vue')
},

{
    path: '/hgt',
    name: 'Hypatia',
    component: ()=> import ('../views/Hypatia.vue')
},

{
    path: '/ecosystem',
    name: 'Ecosystem',
    component: ()=> import ('../views/Ecosystem.vue')
}
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router