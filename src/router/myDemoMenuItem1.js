import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes={
    path:'/myDemoMenuItem1',
    type:'page1',
    name:'myDemoMenuItem1',
    redirect:'/myDemoMenuItem1/test1',
    component: ()=>import('@/components/myDemoMenuItem1/index.vue'),
    children:[
        {
            path:'/myDemoMenuItem1/test1',
            name: 'test1',
            component: ()=>import('@/components/myDemoMenuItem1/main1.vue')
        },
        {
            path:'/myDemoMenuItem1/test2',
            name: 'test2',
            component: ()=>import('@/components/myDemoMenuItem1/main2.vue')
        },
        {
            path:'/myDemoMenuItem1/test3',
            name: 'test3',
            component: ()=>import('@/components/myDemoMenuItem1/main3.vue')
        },
        {
            path:'/myDemoMenuItem1/test4',
            name: 'test4',
            component: ()=>import('@/components/myDemoMenuItem1/main4.vue')
        }
    ]
}

export default routes;