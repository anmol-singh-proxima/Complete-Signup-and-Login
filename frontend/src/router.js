import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/components/StartPage'
import LoginPage from '@/components/LoginPage'
import SignupPage from '@/components/SignupPage'
import HomePage from '@/components/HomePage'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;