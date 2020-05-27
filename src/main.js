import Vue from 'vue'
import App from './App.vue'

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
  router
}).$mount('#app')
