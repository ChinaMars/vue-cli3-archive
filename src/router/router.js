import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Home from '@/views/Home.vue'
import { objectKeyValue } from '@/utils/myUtils'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      menu: true,
      meta:{
        title: '首页',
        icon: 'home'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
      menu: true,
      meta:{
        title: '培训报名',
        icon: 'signup'
      }
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
      menu: true,
      meta:{
        title: '模拟考试',
        icon: 'test'
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      menu: true,
      meta:{
        title: '我的',
        icon: 'account'
      }
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  const routes = router.options.routes
  const routesName = objectKeyValue(routes,'name')
  const toIndex = routesName.indexOf(to.name)
  const fromIndex = routesName.indexOf(from.name)
  let direction = ''
  let isMenu = routes.some((value) => {
    if (value.name == to.name) return value.menu
  })
  if (toIndex > -1 && fromIndex > -1) {
    if(isMenu){
      if (toIndex < fromIndex) {
        direction = 'slide-right'
      } else {
        direction = 'slide-left'
      }

    }else{
      direction = 'fade'
    }
  }
  store.dispatch('app/SetDirection',{ direction: direction })  // 页面切换时执行动画类型
  store.dispatch('app/IsMenu',{ isMenu: isMenu ? true : false }) // 判断当前页面是否有底部菜单
  next()
})

export default router
