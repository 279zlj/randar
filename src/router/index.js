import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import all_bar from '@/components/all_bar'
import system_sketch from '@/components/content/system_sketch'
import cluster_status from '@/components/content/cluster_status'
import node_manager from '@/components/node/node_manager'
import user from '@/components/User/user'
import system_manager from '@/components/system/system_manager'

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
    },
    {
      path:'/cluster_status',
      name:'cluster_status',
      components:{
        default:all_bar,
        content:cluster_status
      }
    },
    {
      path:'/node_manager',
      name:'node_manager',
      components:{
        default:all_bar,
        content:node_manager
      }
    },
    {
      path:'/user',
      name:'user',
      components:{
        default:all_bar,
        content:user
      }
    },
    {
      path:'/system_manager',
      name:'system_manager',
      components:{
        default:all_bar,
        content:system_manager
      }
    }
  ]
})
