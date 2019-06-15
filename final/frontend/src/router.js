import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/ListPlayer.vue')
    },
    {
      path: '/teambuilder/',
      name: 'teambuilder',
      component: () => import('./views/TeamBuilder.vue')
    },
    {
      path: '/nationality/',
      name: 'nationality',
      component: () => import('./views/ListNationality.vue')
    },
    {
      path: '/nationality/:id',
      name: 'nationalityPlayer',
      component: () => import('./views/ListNationalityPlayer.vue')
    },
    {
      path: '/player/:id',
      name: 'player',
      component: () => import('./views/Player.vue')
    },
    {
      path: '/player/:year/:id',
      name: 'playerYear',
      component: () => import('./views/PlayerYear.vue')
    },
    {
      path: '/compare/:ya/:ia/:yb/:ib',
      name: 'compare',
      component: () => import('./views/Compare.vue')
    },
    {
      path: '/club/',
      name: 'club',
      component: () => import('./views/ListClub.vue')
    },
    {
      path: '/club/:id',
      name: 'clubPlayer',
      component: () => import('./views/ListClubPlayer.vue')
    },
  ]
})
