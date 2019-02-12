import Vue from 'vue'
import Router from 'vue-router'
const LandingPage = () => import('@/components/landingpage/LandingPage')
const Profile = () => import('@/components/profile/Profile')
const PersonalInfo = () => import('@/components/personal-info/PersonalInfo')

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