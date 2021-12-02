import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about us',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
