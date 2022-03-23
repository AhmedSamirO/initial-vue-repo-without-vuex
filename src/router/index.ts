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
    path: '/experimental/:lang?',
    name: 'experimental',
    component: AboutView
  },
  {
    path: '/faq/:lang?',
    name: 'faq',
    component: AboutView
  },
  {
    path: '/contact/:lang?',
    name: 'contact',
    component: AboutView
  },
  {
    path: '/contact/:lang?',
    name: 'contact',
    component: AboutView
  },
  {
    path: '/terms/:lang?',
    name: 'terms',
    component: AboutView
  },
  {
    path: '/policy/:lang?',
    name: 'policy',
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
