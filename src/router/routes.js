const LandingPage = () => import('@/pages/LandingPage')
const Profile = () => import('@/pages/Profile')
const PersonalInfo = () => import('@/pages/PersonalInfo')
const SkillsInfo = () => import('@/pages/SkillsInfo')
const PortfolioInfo = () => import('@/pages/PortfolioInfo')
const EducationInfo = () => import('@/pages/EducationInfo')
const ContactUs = () => import('@/pages/ContactUs')

export default [
	{
		path: '/',
		name: 'landing-page',
		component: LandingPage,
		meta: {
			title: "Kemp Steven | Personal Website",

			metaTags: [
				{
					name: "description",
					content:
					"An awesome Front end Web Developer that will surely get things done!"
				}
			]
		}
	},

	{
		path: '', component: Profile, redirect: '/profile',
		children: [
			{ 
				path: '/profile',
				name: 'personal-info',
				component: PersonalInfo,
				meta: {
					title: "Kemp Steven | Front End Developer",

					metaTags: [
						{
							name: "description",
							content:
							"A Front End Web Developer, based on Manila, Philippines!"
						}
					]
				}
			},

			{ 
				path: '/skills',
				name: 'skills-info',
				component: SkillsInfo,
				meta: {
					title: "Kemp Steven | My Skills",

					metaTags: [
						{
							name: "description",
							content:
							"A list of some of my developer skills, that are rated with stars!"
						}
					]
				}
			},

			{ 
				path: '/portfolio',
				name: 'portfolio-info',
				component: PortfolioInfo,
				meta: {
					title: "Kemp Steven | My Portfolio",

					metaTags: [
						{
							name: "description",
							content:
							"Get a look at my porfolio, this are projects that were made by me or projects I collaborated with!"
						}
					]
				}
			},

			{ 
				path: '/education',
				name: 'education-info',
				component: EducationInfo,
				meta: {
					title: "Kemp Steven | My Education",

					metaTags: [
						{
							name: "description",
							content:
							"Get a look at what my degree and various awards is!"
						}
					]
				}
			},

			{
				path: '/contact',
				name: 'contact-us',
				component: ContactUs,
				meta: {
					title: "Kemp Steven | Contact Us",

					metaTags: [
						{
							name: "description",
							content:
							"You have a question for me? Ask it here in the Contact us!"
						}
					]
				}
			}
		]
	}
 ]