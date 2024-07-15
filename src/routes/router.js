import { createRouter, createWebHistory } from 'vue-router'
import Authorization from '@/components/Authorization.vue'
import Register from '@/components/Register.vue'
import RegisterOrganization from '@/components/RegisterOrganization.vue'
import RegisterEvent from '@/components/RegisterEvent.vue'
import EventDetail from '@/components/EventDetail.vue'
import VolunteerProfile from '@/components/VolunteerProfile.vue'
import Home from '@/components/Home.vue'
import Events from '@/components/Events.vue'
import OrganizationProfile from '@/components/OrganizationProfile.vue'
import VolunteerProfileEdit from '@/components/VolunteerProfileEdit.vue'
import OrganizationProfileEdit from '@/components/OrganizationProfileEdit.vue'
import EventEdit from '@/components/EventEdit.vue'
import OrganizationProfileId from '@/components/OrganizationProfileId.vue'
import VolunteerProfileId from '@/components/VolunteerProfileId.vue'

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
  },
  {
    // path: '/organization/:id',
    path: '/organization-profile',
    name: 'organization-profile',
    component: OrganizationProfile
  },
  {
    path: '/volunteer-profile/edit',
    name: 'volunteer-profile-edit',
    component: VolunteerProfileEdit
  },
  {
    path: '/organization-profile/edit',
    name: 'organization-profile-edit',
    component: OrganizationProfileEdit
  },
  {
    path: '/event/:id/edit',
    name: 'event-edit',
    component: EventEdit
  },
  {
    path: '/organization-profile/:id',
    name: 'organization-profile-id',
    component: OrganizationProfileId
  },
  {
    path: '/volunteer-profile/:id',
    name: 'volunteer-profile-id',
    component: VolunteerProfileId
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
