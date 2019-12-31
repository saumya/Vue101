//
import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import One from '../components/One'
import Two from '../components/Two'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            props: true
        },
        { path: '/one/', component: One },
        { path: '/two/', component: Two }
    ]
})