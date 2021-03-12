import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
 
    {
      path: '/teams/index',
      name: 'teams.index',
      component: () => import('./views/Teams/TeamsIndex.vue'),
    },
    {
      path: '/teams/new',
      name: 'teams.new',
      component: () => import('./views/Teams/TeamsForm.vue'),
    },
    {
      path: '/teams/:id',
      name: 'teams.edit',
      component: () => import('./views/Teams/TeamsForm.vue'),
      props: true
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
