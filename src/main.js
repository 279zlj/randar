// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'store'
import './assets/js/jquery-3.3.1.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/icon/iconfont.css'
import echarts from 'echarts'
import axios from 'axios'
import Vuex from 'vuex'
import store from '../src/store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.host = 'http://192.168.5.117:8000/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  echarts,
  store,
  // render:h => h(App),
  components: { App },
  template: '<App/>'
})
