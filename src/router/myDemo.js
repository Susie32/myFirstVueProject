import Vue from 'vue'
import Router from 'vue-router'
import myDemoMenuItem1 from '@/router/myDemoMenuItem1'

Vue.use(Router)
const routes={
    path:'/myDemo',
    type:'home',
    name:'main',
    redirect:'/myDemo/test1',
    component: ()=>import('@/components/myMain/layout.vue'),
    children:[
        myDemoMenuItem1,
        {
            path:'/myDemo/test1',
            name: 'test1',
            component: ()=>import('@/components/myDemoMenuItem1/main1.vue')
        },
        {
            path:'/myDemo/test2',
            name: 'test2',
            component: ()=>import('@/components/myDemoMenuItem1/main2.vue')
        },
        {
            path:'/myDemo/test3',
            name: 'test3',
            component: ()=>import('@/components/myDemoMenuItem1/main3.vue')
        },
        {
            path:'/myDemo/test4',
            name: 'test4',
            component: ()=>import('@/components/myDemoMenuItem1/main4.vue')
        }
    ]
}

export default routes;