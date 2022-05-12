import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import UserCreate from '../views/user/UserCreate.vue'
import Users from '../views/user/Users.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/users',
    name: 'User list',
    component: Users
  },

  {
    path: '/user/create',
    name: 'Create User',
    component: UserCreate
  },

  {
    path: '/user/edit/:id',
    name: 'Edit',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
