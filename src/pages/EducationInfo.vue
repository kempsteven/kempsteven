<template>
	<div class="education">
		<div class="education-container">
			<div class="lottie-container">
				<lottie ref="lottie" :options="defaultOptions" @animCreated="handleAnimation"/>
			</div>

			<span class="education-header">Education</span>

			<span class="education-item">Bachelor of Science in Computer Science</span>
		</div>

		<div class="education-container">
			<span class="education-header">Awards I Got in the University</span>

			<div class="education-item">Best Thesis</div>
			<div class="education-item">Best Programmer</div>
			<div class="education-item">Dean's Lister</div>
		</div>
	</div>
</template>
<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/books.json';
export default {
	components: {
		'lottie': Lottie
	},

	data () {
		return {
			defaultOptions: {animationData: animationData.default},
		}
	},

	activated () {
		this.playLottieAnim()
	},

	deactivated () {
		this.stopLottieAnim()
	},

	mounted () {
		setTimeout( ()=>{
			this.recurseString()
		}, 1000)
	},

	methods: {
		playLottieAnim () {
			this.$refs.lottie.anim.play()
		},

		stopLottieAnim () {
			this.$refs.lottie.anim.stop()
		},

		handleAnimation(anim) {
			this.anim = anim
			this.anim.setSpeed(0.8)
		},

		async recurseString () {
			let random = (max) => {
				return Math.ceil(Math.random() * Math.floor(max));
			}

			document.querySelectorAll('.education-item').forEach( async (item) => {
				let innerText = item.innerText
				item.innerText = ''

				for (let x = 0; x <= innerText.length - 1; x++) {
					new Promise( (resolve) => {
						setTimeout( ()=>{

							if (innerText[x] === ' ') {
								item.innerText = item.innerText + '_'
							} else {

								if (random(3) === 3) {
									new Promise( (res) => {
										item.innerText = item.innerText.concat(0)

										setTimeout( () => {
											item.innerText = item.innerText.replace(/0/g, innerText[x])
											res()
										}, 10)
									})
								} else if (random(3) === 2) {
									new Promise( (res) => {
										item.innerText = item.innerText.concat(1)

										setTimeout( () => {
											item.innerText = item.innerText.replace(/1/g, innerText[x])
											res()
										}, 10)
									})
								} else {
									item.innerText = item.innerText.concat(innerText[x])
								}

							}

							if (x === innerText.length - 1) {
								let temp = item.innerText.replace(/_/g, ' ')
								item.innerText = temp
							}
							resolve()
						}, x * 100)
					})
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	.lottie-container{
		height: 12vw;
		width: 12vw;
		position: absolute;
		left: -3vw;
		top: -10.2vw;
		z-index: 1;
		opacity: 0;
		@include fadein(0.6s, 1s);
	}

	.education {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		.education-container {
			z-index: 2;
			position: relative;
			padding: 0.75vw;
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.5);
			width: 70%;
			display: flex;
			flex-direction: column;
			text-align: left;
			border-radius: 0.1vw;
			margin-bottom: 2vw;
			opacity: 0;
			background: rgba(250,250,250,0.5);
			@include fadein(0.6s, 1s);

			.education-header {
				font-size: 1.75vw;
				padding-bottom: 0.75vw;
				border-bottom: 0.1vw solid rgba(0,0,0,.1);
				margin-bottom: 0.75vw;
			}

			.education-item {
				font-size: 1vw;
				background: $blue;
				padding: 0.75vw;
				color: #fff;
				margin-bottom: 0.75vw;
				border-radius: 0.1vw;
				opacity: 0;
				@include fadeinfromtop(0.3s, 1s);
			}
		}
	}
</style>