<template>
	<div class="personal-container gl-flex-vhcenter">
		<div class="left">
			<div class="image-container gl-flex-vhcenter appear">
				<img
					alt="profile picture"
					:src="require('@/assets/img/picture.webp')"
					:class="{ 'appear' :imgHasloaded}"
					@load="imageOnLoad()"
					v-show="imgHasloaded"
				>

				<div class="lottie-container" v-if="!imgHasloaded">
					<Lottie
						class="lottie"
						:options="defaultOptions"
						@animCreated="handleAnimation"
					/>
				</div>
			</div>
		</div>

		<div class="right gl-flex">
			<div class="section appear">Hello, I am </div>

			<div class="section name">Kemp Steven!</div>

			<div class="section has-child gl-flex">
				<div class="label appear gl-flex-vhcenter">A</div>
				<div class="label gl-flex-vhcenter job">Front End Developer,</div>
			</div>

			<div class="section has-child gl-flex">
				<div class="label appear gl-flex-vhcenter">Based on</div>
				<div class="label gl-flex-vhcenter job">Manila, Philippines</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as animationData from '@/assets/animation/loading.json';
export default {
	name: 'PersonalInfo',

	components: {
		Lottie: () => import('vue-lottie')
	},

	data () {
		return {
			defaultOptions: {animationData: animationData.default},
			imgHasloaded: false
		}
	},

	methods:{
		imageOnLoad () {
			this.imgHasloaded = true
		},

		handleAnimation(anim) {
			this.anim = anim;
			this.anim.setSpeed(1.7)    
		},
	}
}
</script>

<style lang="scss" scoped>
.personal-container {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;

	@include mobile {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 25%;
		// align-items: center;
	}

	.left {
		width: 28%;
		height: 17.5vw;

		@include mobile {
			width: 200px;
			height: 200px;
		}

		.image-container {
			width: 100%;
			height: 100%;
			overflow: hidden;
			border: 1px solid $black;
			border-radius: 50%;
			box-shadow: 2px 2px 10px #888888;
			opacity: 0;
			@include fadein(0.75s, 0.8s); 

			img {
				opacity: 0;
				width: auto;
				height: 100%;
			}

			.lottie-container{
				width: 100%;
				height: 100%;
				background: #f2f2f2;
				padding: 3vw;
				opacity: 0;
				@include fadein(0.75s, 0.8s);
			}
		}
	}

	.right {
		padding-left: 4vw;
		flex-direction: column;

		@include mobile {
			width: 90%;
			padding: 0;
			margin-top: 15px;
		}
	
		.section{
			color: $black;
			font-weight: 600;
			font-size: $header;
			width: 100%;
			text-align: left;
			opacity: 0;

			@include mobile {
				font-size: 28px;
				text-align: center;
			}
	
			&.name{
				font-size: 3.5vw;
				color: $blue;
				margin-bottom: 1vw;
				@include fadeinfromtop(0.75s, 0.75s)

				@include mobile {
					font-size: 28px;
					margin-bottom: 15px;
				}
			}
	
			&.has-child {
				opacity: 1;

				@include mobile {
					display: flex;
					justify-content: center;
				}
			}
	
			.label {
				font-size: 1.5vw;
				opacity: 0;

				@include mobile {
					font-size: 16px;
					text-align: center;
				}
	
				&.job {
					margin-left: 0.5vw; 
					color: $blue;
					font-size: 2vw;
					@include fadeinfromtop(0.75s, 0.75s)

					@include mobile {
						font-size: 18px;
						margin-left: 7px; 
					}
				}
			}
		}
	}
}

.appear {
	@include fadein(0.75s, 0.8s); 
}
// }


</style>
