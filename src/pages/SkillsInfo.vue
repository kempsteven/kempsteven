<template>
	<div class="skills-info">
		<div class="info-wrapper">
			<span class="info-header">
				My Skills Set
			</span>

			<Loading v-if="loading"/>

			<transition name="g-transition">
				<div
					class="skill-container gl-flex gl-around-item scroll"
					:class="{ 'no-pointer' : isInteracting}"
					ref="skillContainer"
					v-if="!loading"
				>
					<div
						class="skill-item"
						v-for="(skill, key) in list.list"
						:key="key"
					>
						<div class="img-container">
							<label class="skill-label">
								{{ skill.skillName }}
							</label>

							<img :src="skill.skillImg.url" alt="Skill Item">
						</div>

						<div class="stars-container gl-flex gl-vcenter-item">
							<font-awesome-icon 
								class="star-icon" 
								v-for="(star, key) in starRating(skill.skillLevel)"
								:icon="[star.type, star.icon]" 
								:key="key"
							/>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as skillModule from '@/store/skill/app.js'
import Loading from '@/components/global/Loading.vue'
export default {
	data () {
		return {
			skills: [
				{HTML: 5}, {CSS: 5}, {Sass: 4.5}, {Javascript: 4}, {'Vue.js': 4},
				{'Node.js': 3}, {PHP: 3}, {MySql: 2.5},
			],

			apiUrl: `${process.env.VUE_APP_API_URL}/` 
		}
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting',
			list: 'skill/getList',
			loading: 'skill/getLoading'
		})
	},

	beforeCreate () {
		if (!this.$store._modulesNamespaceMap['skill/']) {
			this.$store.registerModule('skill', skillModule.default)
		}
	},

	async created () {
		await this.getSkillList()
		this.setStarAnimation()
	},

	methods: {
		async getSkillList () {
			await this.$store.dispatch('skill/getSkillList')
		},

		processImgName (skill) {
			return Object.keys(skill)[0].toLowerCase().split('.')[0]
		},

		starRating (rating) {
			let parsedRating = parseInt(String(rating).split('.')[0])
			let hasDecimal = String(rating).split('.').length === 2 ? true : false
			let starArray = []

			for (let rate = 1; rate <= parsedRating; rate++) {
				starArray.push({type: 'fas', icon: 'star'})
			}

			if (hasDecimal) {
				starArray.push({type: 'fas', icon: 'star-half-alt'})
			}

			
			if (starArray.length !== 5) {
				let length = starArray.length

				for (let nostar = 1; nostar <= 5 - length; nostar++) {
					starArray.push({type: 'far', icon: 'star'})
				}
			}

			return starArray
		},

		setStarAnimation () {
			let stars = this.$refs.skillContainer.querySelectorAll('svg')
			let count = 0

			for (let star = 0; star <= stars.length - 1; star++) {
				stars[star].classList.remove('disappear')

				setTimeout( ()=>{
					stars[count].classList.add('appear')
					count++
				}, star * 100)
			}
		}
	},

	components: {
		Loading,
	}
}
</script>
<style lang="scss" scoped>
.skills-info {
	width: 100%;
	min-height: 100%;
	position: absolute;

	.info-wrapper {
		width: 100%;
		margin-top: 13vh;

		.info-header {
			text-align: center;
			font-size: 2vw;
			margin: 0 auto;
			padding: 1vw 3vw;
			display: block;
			width: 30vw;
			color: $black;
			font-weight: 600;
			opacity: 0;
			@include fadein(0.75s, 0.5s); 

			@include mobile {
				font-size: 18px;
				width: 150px;
				margin-bottom: 15px;
			}
		}

		.lottie-container{
			width: 30%;
			height: 100%;
			background: #f2f2f2;
			padding: 3vw;
			opacity: 0;
			margin: 5vw auto 0 auto;
			@include fadein(0.75s, 0.8s);

			.lottie {
				height: 50%;
			}

			.loading-label {
				display: block;
				font-size: 1vw;
				text-align: center;
				width: 100%;
			}

			@include mobile {
				width: 60%;
				margin: 0 auto;

				.loading-label {
					font-size: 14px;
				}
			}
		}

		.skill-container {
			margin: 0 auto;
			height: 29vw;
			overflow: auto;
			pointer-events: all;
			border-radius: 2px;

			&.no-pointer {
				pointer-events: none;
			}

			@include mobile {
				height: 56vh;
				width: 65%;
				overflow-y: auto;
				overflow-x: auto;
			}

			.skill-item {
				padding: 1vw;
				width: 26vw;
				height: 7vw;
				display: flex;

				@include mobile {
					width: 100%;
					padding: 5px;
					min-height: 60px;
				}

				label {
					font-weight: 600;
				}

				.img-container {
					min-width: 6vw;
					height: 100%;
					display: flex;
					opacity: 0;
					flex-direction: column;
					@include fadeinfromtop(0.75s, 0.5s)

					@include mobile {
						width: 75px;
					}

					.skill-label {
						text-align: center;
						margin-bottom: 0.5vw;
						font-size: 0.95vw;

						@include mobile {
							font-size: 12px;
							margin-bottom: 10px;
						}
					}

					img {
						width: 3vw;
						margin: 0 auto;

						@include mobile {
							width: 20px;
						}
					}
				}

				.stars-container {
					flex: 1;
					padding-left: 2vw;
					opacity: 0;
					@include fadeinfromtop(0.75s, 0.6s);

					@include mobile {
						padding-left: 5px;
					}

					svg {
						font-size: 1.75vw;
						color: #f4d866;
						opacity: 0;

						@include mobile {
							font-size: 17px;
						}

						&.appear {
							@include fadeinfromright(0.2s, 0.3s)
						}

						&:not(:last-child) {
							margin-right: 0.75vw;
						}
					}
				}
			}
		}
	}
}
</style>