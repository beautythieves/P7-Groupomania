import { createRouter, createWebHashHistory } from 'vue-router';
import Posts from '@/views/PagePosts';
import Login from '@/views/PageLogin';
import Home from '@/views/PageHome';
import Signup from '@/views/PageSignup'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  }, 
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'signup' && to.name !== 'home') {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) next('/login');
  }
  next();
});

export default router
