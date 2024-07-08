import { createRouter, createWebHistory } from 'vue-router'
import Authorization from '@/components/Authorization.vue'
import Register from '@/components/Register.vue'
import RegisterOrganization from '@/components/RegisterOrganization.vue'
import RegisterEvent from '@/components/RegisterEvent.vue'
import EventDetail from '@/components/EventDetail.vue'
import VolunteerProfile from '@/components/VolunteerProfile.vue'
import Home from '@/components/Home.vue'
import Events from '@/components/Events.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
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
  {
    path: '/volunteer-profile',
    name: 'volunteer-profile',
    component: VolunteerProfile
  },
  {
    path: '/register/event',
    name: 'register-event',
    component: RegisterEvent
  },
  {
    path: '/event/:id',
    name: 'event-detail',
    component: EventDetail
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
