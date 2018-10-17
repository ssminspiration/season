import Vue from 'vue'
import Router from 'vue-router'
import spring from '@/components/spring'
import summer from '@/components/summer'
import autumn from '@/components/autumn'
import winter from '@/components/winter'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/spring',
            name:'spring',
            component:spring,
        },
        {
            path:'/summer',
            name:'summer',
            component:summer,
        },
        {
            path:'/autumn',
            name:'autumn',
            component:autumn,
        },
        {
            path:'/winter',
            name:'winter',
            component:winter,
        },
    ]
})
