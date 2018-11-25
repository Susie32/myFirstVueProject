import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/router/HelloWorld'
import layout from '@/router/myDemo'

Vue.use(Router)

export default new Router({
  routes: [
      HelloWorld,
      layout
  ]
})
