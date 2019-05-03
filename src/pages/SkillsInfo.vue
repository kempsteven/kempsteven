<template>
	<div class="skills-info">
		<div class="info-wrapper">
			<span>My Skills Set</span>

			<div class="skill-container gl-flex gl-around-item scroll" :class="{ 'no-pointer' : isInteracting}" ref="skillContainer">
				<div class="skill-item" v-for="(skill, key) in skills" :key="key">
					<div class="img-container">
						<label class="skill-label">{{ Object.keys(skill)[0] }}</label>
						<img :src="require(`@/assets/img/skills/${processImgName(skill)}.png`)" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon 
							class="star-icon" 
							:icon="[star.type, star.icon]" 
							v-for="(star, key) in starRating(Object.values(skill)[0])"
							:key="key"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			skills: [
				{HTML: 5}, {CSS: 5}, {Sass: 4.5}, {Javascript: 4}, {'Vue.js': 4},
				{'Node.js': 3}, {PHP: 3}, {MySql: 2.5}
			],
		}
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting'
		})
	},

	activated(){
		this.setStarAnimation()
	},

	methods: {
		processImgName(skill){
			return Object.keys(skill)[0].toLowerCase().split('.')[0]
		},

		starRating(rating) {
			var parsedRating = parseInt(String(rating).split('.')[0])
			var hasDecimal = String(rating).split('.').length === 2 ? true : false
			var starArray = []

			for (var rate = 1; rate <= parsedRating; rate++) {
				starArray.push({type: 'fas', icon: 'star'})
			}

			if (hasDecimal) {
				starArray.push({type: 'fas', icon: 'star-half-alt'})
			}

			
			if (starArray.length !== 5) {
				var length = starArray.length

				for (var nostar = 1; nostar <= 5 - length; nostar++) {
					starArray.push({type: 'far', icon: 'star'})
				}
			}

			return starArray
		},

		setStarAnimation(){
			var stars = this.$refs.skillContainer.querySelectorAll('svg')
			var count = 0

			for (var star = 0; star <= stars.length - 1; star++) {
				stars[star].classList.remove('disappear')
				setTimeout( ()=>{
					stars[count].classList.add('appear')
					count++
				}, star * 100)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.skills-info {
	width: 100%;
	height: 100%;
	position: absolute;

	.info-wrapper {
		width: 100%;
		margin-top: 13vh;

		span {
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
				height: 66vh;
				width: 65%;
				overflow-y: auto;
				overflow-x: hidden;
			}

			.skill-item {
				padding: 1vw;
				width: 26vw;
				display: flex;

				@include mobile {
					width: 100%;
					padding: 5px;
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
							font-size: 18px;
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