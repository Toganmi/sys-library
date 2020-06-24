import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

// 导入全局初始化样式
import './assets/index.css'

// 整合路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入对应的路由
import discovery from './views/01.discovery.vue'
import register from './views/02.register.vue'
import login from './views/03.login.vue'
import pinfo from './views/04.pinfo.vue'
import appointment from './views/05.appointment.vue'
import mine from './views/06.mine.vue'
import reservation from './views/07.reservation.vue'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/discovery'
    },
    {
      path: '/discovery',
      component: discovery
    },
    // 登录页面
    {
      path: '/login',
      component:login
    },
    // 注册页面
    {
      path: '/register',
      component:register
    },
    {
      // 个人信息
      path:'/pinfo',
      component:pinfo
    },
    {
      // 我的预约
      path:'/appointment',
      component:appointment
    },
    {
      // 我的
      path:'/mine',
      component:mine
    },
    {
      // 预约位置
      path:'/reservation',
      component:reservation
    },
    
  ]
})

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

// 导入全局初始化样式
import './assets/index.css'

// 路由整合
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入对应的路由
import discovery from './views/01.discovery.vue'
import register from './views/02.register.vue'
import login from './views/03.login.vue'
import pinfo from './views/04.pinfo.vue'
import appointment from './views/05.appointment.vue'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/discovery'
    },
    {
      path: '/discovery',
      component: discovery
    },
    // 登录页面
    {
      path: '/login',
      component:login
    },
    // 注册页面
    {
      path: '/register',
      component:register
    },
    {
      // 个人信息
      path:'/pinfo',
      component:pinfo
    },
    {
      // 我的预约
      path:'/appointment',
      component:appointment
    },
    
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
<<<<<<< HEAD
  store,
=======
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
  router
}).$mount('#app')
