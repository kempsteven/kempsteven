import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/components/landingpage/LandingPage'
import Profile from '@/components/profile/Profile'
import PersonalInfo from '@/components/personal-info/PersonalInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'landingpage', component: LandingPage},
    {
		path: '/profile', component: Profile,
		children: [
			{ path: '', name: 'personal-info', component: PersonalInfo },
		]
	},
  ],
	mode: 'history'
})