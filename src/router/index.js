import Vue from 'vue'
import Router from 'vue-router'
const LandingPage = () => import('@/pages/landingpage/LandingPage')
const Profile = () => import('@/pages/profile/Profile')
const PersonalInfo = () => import('@/pages/personal-info/PersonalInfo')
const EducationInfo = () => import('@/pages/education-info/EducationInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'landingpage', component: LandingPage},
    {
		path: '/profile', component: Profile,
		children: [
			{ path: '', name: 'personal-info', component: PersonalInfo },
			{ path: '/education', name: 'education-info', component: EducationInfo }
		]
	},
  ],
	mode: 'history'
})