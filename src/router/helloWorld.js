import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import layout from '@/components/myMain/Layout'

Vue.use(Router)
const routes =
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () =>import('@/components/HelloWorld')
    }
  

export default routes;