import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter)
// /:lang?
const routes = [
  {
    path: '/:lang?',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/about/:lang?',
    name: 'about',
    component: HelloWorld
  },
  {
    path: '/services/:lang?',
    name: 'services',
    component: HelloWorld
  },
  {
    path: '/customers/:lang?',
    name: 'customers',
    component: HelloWorld
  },
  {
    path: '/contact/:lang?',
    name: 'contact',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
