import Vue from 'vue'
import Router from 'vue-router'
import BasicForm from '@/components/BasicForm.vue'
import CounterForm from '@/components/CounterForm.vue'
import EmittedParentForm from '@/components/EmittedParentForm.vue'
import AsyncForm from '@/components/AsyncForm'

Vue.use(Router)

export default new Router({
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
      path: '/Counter',
      name: 'Counter',
      component: CounterForm
    },
    {
      path: '/Basic',
      name: 'Basic',
      component: BasicForm
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: EmittedParentForm
    },
    {
      path: '/Asyncs',
      name: 'Asyncs',
      component: AsyncForm
    }
  ]
})