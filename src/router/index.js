import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import all_bar from '@/components/all_bar'
import system_sketch from '@/components/content/system_sketch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/all_bar',
      name:'all_bar',
      component:all_bar
    },
    {
      path:'/system_sketch',
      name:'system_sketch',
      components:{
        default:all_bar,
        content:system_sketch
      }
    }
  ]
})
