import Vue from 'vue'
import Router from 'vue-router'
import FancyHeading from '@/components/FancyHeading.vue'
import Temperature from '@/components/Temperature.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },   
    {
      path: '/fancyheading',
      name: 'fancyheading',
      component: FancyHeading
    },   
    {
      path: '/temperature',
      name: 'temperature',
      component: Temperature
    }
  ]
})
