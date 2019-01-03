import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/components/landingpage/LandingPage'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'landingpage', component: LandingPage},
    {path: '/home', name: 'home', component: Home},
  ],
	mode: 'history'
})