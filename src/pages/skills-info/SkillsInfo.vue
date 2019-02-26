<template>
	<div class="skills-info">
		<div class="info-wrapper">
			<span>My Skills Set</span>

			<div class="skill-container gl-flex gl-around-item">
				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">HTML</label>
						<img :src="require('@/assets/img/skills/html.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>
				
				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">CSS</label>
						<img :src="require('@/assets/img/skills/css.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">Sass</label>
						<img :src="require('@/assets/img/skills/sass.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">Javascript</label>
						<img :src="require('@/assets/img/skills/js.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">Vue.js</label>
						<img :src="require('@/assets/img/skills/vue.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">Node js</label>
						<img :src="require('@/assets/img/skills/nodejs.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">PHP</label>
						<img :src="require('@/assets/img/skills/php.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>

				<div class="skill-item">
					<div class="img-container">
						<label class="skill-label">MySQL</label>
						<img :src="require('@/assets/img/skills/mysql.png')" alt="Skill Item">
					</div>
	
					<div class="stars-container gl-flex gl-vcenter-item">
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
						<font-awesome-icon icon="star" />
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.skills-info {
	width: 100%;
    height: 100%;
    position: absolute;

	.info-wrapper {
		width: 100%;
		margin-top: 3vw;

		span {
			text-align: center;
			font-size: 2vw;
			margin: 0 auto;
			padding: 1vw 3vw;
			display: block;
			width: 30vw;
			color: $black;
			font-weight: 600;
		}

		.skill-container {

			.skill-item {
				padding: 1vw;
				width: 26vw;
				display: flex;

				label {
					font-weight: 600;
				}

				.img-container {
					min-width: 6vw;
					height: 100%;
					display: flex;
					flex-direction: column;

					.skill-label {
						text-align: center;
						margin-bottom: 0.5vw;
						font-size: 0.95vw;
					}

					img {
						width: 3vw;
						margin: 0 auto;
					}
				}

				.stars-container {
					flex: 1;
					padding-left: 2vw;

					svg {
						font-size: 1.75vw;
						color: #f4d866;

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