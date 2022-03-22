import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/:lang?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:lang?',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services/:lang?',
    name: 'services',
    component: AboutView
  },
  {
    path: '/customers/:lang?',
    name: 'customers',
    component: AboutView
  },
  {
    path: '/contact/:lang?',
    name: 'contact',
    component: AboutView
  },
  //{
  //  path: '/contact/:lang?',
  //  name: 'contact',
  //  component: () => import(/* webpackChunkName: "contact" */ '../views///AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
