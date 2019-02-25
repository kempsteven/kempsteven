<template>
	<div class="skills-info">
		<div class="info-wrapper">
			<span>My Skills Set!</span>

			<div class="skill-item">
				<div class="img-container">
					<label class="skill-label">HTML</label>
					<img :src="require('@/assets/img/skills/html.png')" alt="Skill Item">
				</div>

				<div class="stars-container gl-vcenter-item">
					<div class="star"></div>
				</div>
			</div>

			<div class="skill-item">
				<div class="img-container">
					<label class="skill-label">CSS</label>
					<img :src="require('@/assets/img/skills/css.png')" alt="Skill Item">
				</div>

				<div class="stars-container">
					
				</div>
			</div>

			<div class="skill-item">
				<div class="img-container">
					<label class="skill-label">Javascript</label>
					<img :src="require('@/assets/img/skills/js.png')" alt="Skill Item">
				</div>

				<div class="stars-container">
					
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
	display: flex;
	justify-content: center;
	align-items: center;

	.info-wrapper {
		width: 100%;

		span {
			text-align: center;
			font-size: 3vw;
			border: 1px solid #2c3e50;
			margin: 0 auto;
			padding: 1vw 3vw;
			border-radius: 2px;
			margin-bottom: 5vw;
			display: block;
			width: 30vw;
			color: $blue;
			font-weight: 600;
		}

		.skill-item {
			border: 1px solid black;
			padding: 1vw;
			width: 30vw;
			margin: 0 auto;

			label {
				font-weight: 600;
			}

			.img-container {
				width: 5vw;
				height: 100%;


				img {
					width: 100%;
				}
			}

			.stars-container {

				.star{
					margin: 50px 0;
					position: relative;
					display: block;
					color: red;
					width: 0px;
					height: 0px;
					border-right: 100px solid transparent;
					border-bottom: 70px solid red;
					border-left: 100px solid transparent;
					transform: rotate(35deg);

					&::after {
						content: '';
						margin: 50px 0;
						position: absolute;
						display: block;
						color: red;
						width: 0px;
						height: 0px;
						border-right: 100px solid transparent;
						border-bottom: 70px solid red;
						border-left: 100px solid transparent;
						transform: rotate(-35deg);
					    top: -55px;
    					left: -122px;
					}

					&::before {
						content: '';
						margin: 50px 0;
						position: absolute;
						display: block;
						color: red;
						width: 0px;
						height: 0px;
						border-right: 100px solid transparent;
						border-bottom: 70px solid red;
						border-left: 100px solid transparent;
						top: -39px;
    					left: -116px;
						transform: rotate(-70deg);
					}
				}
			}
		}
	}
}


</style>