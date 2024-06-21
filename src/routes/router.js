import { createRouter, createWebHistory } from 'vue-router';
import Authorization from '@/components/Authorization.vue'
import Register from '@/components/Register.vue';
import RegisterOrganization from '@/components/Register-organization.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'login',
    component: Authorization
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/register/organization',
    name: 'register-organization',
    component: RegisterOrganization
  },
  // {
  //   path: '/volunteer-profile',
  //   name: 'volunteer-profile',
  //   component: VolunteerProfile
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;