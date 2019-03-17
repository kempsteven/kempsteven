import Vue from 'vue'
import Router from 'vue-router'
const LandingPage = () => import('@/pages/landingpage/LandingPage')
const Profile = () => import('@/pages/profile/Profile')
const PersonalInfo = () => import('@/pages/personal-info/PersonalInfo')
const SkillsInfo = () => import('@/pages/skills-info/SkillsInfo')
const PortfolioInfo = () => import('@/pages/portfolio-info/PortfolioInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'landing-page', component: LandingPage},
    {
		path: '', component: Profile, redirect: '/profile',
		children: [
			{ path: '/profile', name: 'personal-info', component: PersonalInfo },
			{ path: '/skills', name: 'skills-info', component: SkillsInfo },
			{ path: '/portfolio', name: 'portfolio-info', component: PortfolioInfo }
		]
	},
  ],
	mode: 'history'
})