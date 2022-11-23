import { createRouter, createWebHistory } from 'vue-router'
import Post from '@/views/post.vue'
import Error404 from '@/views/error404.vue'

const routes = [
    {
        path: '/',
        name: 'frontpage',
        component: Post,
        props: {type: 'frontpage'}
    },
    {
        path: '/article/:id(\\d+)',
        name: 'article',
        component: Post,
        props: {type: 'article'},
    },
    {
        path: '/:slug([^_].*)',
        name: 'Error404',
        component: Error404,
    }

]

const router = createRouter({ history: createWebHistory(), routes })
export default router
