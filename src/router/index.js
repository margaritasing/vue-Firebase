import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },

    {
        path: '/proyectos',
        name: 'Proyectos',
        // route level code-splitting
        // this generates a separate chunk (proyectos.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
    },

    {
        path: '/reg-projects',
        name: 'Created',
        // route level code-splitting
        // this generates a separate chunk (reg-projects.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "reg-projects" */ '../views/Created.vue')
    },

    {
        path: '/edit-project',
        name: 'Edit',
        // route level code-splitting
        // this generates a separate chunk (edit-projects.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "edit-projects" */ '../views/Edit.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router