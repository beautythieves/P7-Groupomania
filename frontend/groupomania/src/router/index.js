import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '@/views/Posts';
import Login from '@/views/Login';

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
