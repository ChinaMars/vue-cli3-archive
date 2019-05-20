import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Home from '@/views/Home.vue'
import { objectKeyValue } from '@/utils/myUtils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      menu: true,
      mate:{
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
      mate:{
        title: '培训报名',
        icon: 'signup'
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
      menu: false,
      mate:{
        title: '登录',
        icon: 'login'
      }
    }
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
  store.dispatch('updateDirection',{ direction: direction })
  next()
})

export default router
