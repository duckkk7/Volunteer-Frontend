import Register from '@/components/Register.vue';
import RegisterOrganization from '@/components/Register-organization.vue';

//import NotFound from '@/components/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'register',
    component: Register,
    children: [
      {
        path: '/register',
        name: 'new-account',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../components/Register.vue')
      },
      {
        path: '/register/organization',
        name: 'new-account-organization',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../components/Register-organization.vue')
      },
    ]
  },


  {
    path: '/',
    redirect: '',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;