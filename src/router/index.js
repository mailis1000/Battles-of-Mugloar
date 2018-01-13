import Vue from 'vue'
import Router from 'vue-router'
import Battle from '@/components/Battle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Battle',
      component: Battle
    }
  ]
})
