<template>
	<div class="education">
		<div class="loading-container" v-show="loading">
			<Lottie
				class="lottie"
				:options="loadingOptions"
				@animCreated="handleLoadingAnimation"
			/>
			
			<span class="loading-label">
				Loading...
			</span>
		</div>

		<div class="items-container" v-show="!loading">
			<div class="lottie-container">
				<Lottie
					ref="lottie"
					:options="defaultOptions"
					@animCreated="handleAnimation"
				/>
			</div>
			<div
				class="education-wrapper"
				:key="key"
				v-for="(education, key) in list.data"
			>
				<div class="education-container">
					<span class="education-header">
						Education
					</span>

					<vue-typed-js
						:startDelay="800"
						:typeSpeed="30"
						:strings="[
							textToBinary(education.education, 4),
							education.education
						]"
						class="education-item"
					>
						<span class="typing"></span>
					</vue-typed-js>
				</div>

				<div class="education-container">
					<span class="education-header">
						Awards I Got in the University
					</span>

					<div
						class="education-item"
						:key="key"
						v-for="(award, key) in education.awards.split(',')"
					>
						<vue-typed-js
							:startDelay="800"
							:typeSpeed="25 * key"
							:strings="[
								textToBinary(award, 4),
								award
							]"
						>
							<span class="typing"></span>
						</vue-typed-js>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Lottie from 'vue-lottie';
import { mapGetters } from 'vuex'
import * as animationData from '@/assets/animation/books.json';
import * as loadingData from '@/assets/animation/loading.json';
import * as educationModule from '@/store/education/app.js'
export default {
	components: {
		Lottie,
	},

	data () {
		return {
			defaultOptions: {animationData: animationData.default},
			loadingOptions: {animationData: loadingData.default}
		}
	},

	beforeCreate () {
		if (!this.$store._modulesNamespaceMap['education/']) {
			this.$store.registerModule('education', educationModule.default)
		}
	},

	activated () {
		this.playLottieAnim()
	},

	deactivated () {
		this.stopLottieAnim()
	},

	async created () {
		await this.getEducationList()
	},

	computed: {
		...mapGetters({
			list: 'education/getList',
			loading: 'education/getLoading'
		})
	},

	methods: {
		textToBinary (text, length) {
			let binaryOfText = ''
			let textArr = text.split('')
			for (var i = 0; i < textArr.length; i++) {
				/* 
					return the Unicode of the first character in a string
					then toString(2) makes binary value from number
				*/
				binaryOfText += textArr[i].charCodeAt(0).toString(2) + " "

				if (binaryOfText.split(' ').length === length) break
			}
			
			return binaryOfText
		},

		async getEducationList () {
			await this.$store.dispatch('education/getEducationList')
		},

		playLottieAnim () {
			this.$refs.lottie.anim.play()
		},

		stopLottieAnim () {
			this.$refs.lottie.anim.stop()
		},

		handleAnimation(anim) {
			this.anim = anim
			this.anim.setSpeed(1.2)
		},

		handleLoadingAnimation (anim) {
			this.anim = anim
			this.anim.setSpeed(1.7)
		}
	}
}
</script>
<style lang="scss" scoped>


.education {
	width: 100%;
	min-height: 100%;
	display: flex;
	align-items: center;

	.loading-container{
		width: 30%;
		height: 30%;
		padding: 3vw;
		opacity: 0;
		margin: 0 auto;
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

			.lottie {
				height: auto;
			}

			.loading-label {
				font-size: 14px;
			}
		}
	}

	.items-container {
		width: 100%;
		min-height: 100%;
		display: flex;
		position: relative;

		.lottie-container {
			height: 12vw;
			width: 12vw;
			position: absolute;
			left: 6.8vw;
			top: -10.2vw;
			z-index: 1;
			opacity: 0;
			@include fadein(0.6s, 1s);

			@include mobile {
				width: 150px;
				height: 150px;
				left: 18px;
				top: -128px;
			}
		}

		.education-wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;

			.education-container {
				z-index: 2;
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

				@include mobile {
					padding: 10px;
					border-radius: 2px;
					margin-bottom: 10px;
				}

				.education-header {
					font-size: 1.75vw;
					padding-bottom: 0.75vw;
					border-bottom: 0.1vw solid rgba(0,0,0,.1);
					margin-bottom: 0.75vw;

					@include mobile {
						padding-bottom: 10px;
						border-bottom: 1px solid rgba(0,0,0,.1);
						margin-bottom: 10px;
						font-size: 15px;
						font-weight: 600;
					}
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

					.type-writer {
						display: inline-block;
					}

					.typing {
						display: inline;
					}

					@include mobile {
						font-size: 14px;
						padding: 10px;
						margin-bottom: 10px;
						border-radius: 2px;
					}
				}
			}
		}
	}
}
</style>