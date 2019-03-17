<template>
	<div class="portfolio-info">
		<span>My Portfolios</span>

		<div class="row" :class="{ 'disappear' : isInteracting }">
			<div class="column">
				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/prominence/desktop.webp')">

					<div class="item-details">
						<span>Prominence Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/accursed/desktop.webp')">

					<div class="item-details">
						<span>Accursed Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/accursed/desktop.webp')">

					<div class="item-details">
						<span>Accursed Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/prominence/desktop.webp')">

					<div class="item-details">
						<span>Prominence Website</span>
					</div>
				</div>
			</div>

			<div class="column">
				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/accursed/desktop.webp')">

					<div class="item-details">
						<span>Accursed Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/prominence/desktop.webp')">

					<div class="item-details">
						<span>Prominence Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/prominence/desktop.webp')">

					<div class="item-details">
						<span>Prominence Website</span>
					</div>
				</div>

				<div class="portfolio-item">
					<img :src="require('@/assets/img/portfolio/accursed/desktop.webp')">

					<div class="item-details">
						<span>Accursed Website</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
        ...mapGetters({
            isInteracting: 'getIsInteracting'
        })
    }
}
</script>
<style lang="scss" scoped>
.portfolio-info {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		text-align: center;
		font-size: 2vw;
		margin: 0 auto;
		padding: 0.5vw 3vw;
		display: block;
		width: 30vw;
		color: $black;
		font-weight: 600;
		opacity: 0;
		@include fadein(0.75s, 0.5s); 
	}
}

.row {
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
	width: 100%;
	height: 65vh;
	margin-top: 1vh;
	pointer-events: all;
	opacity: 0;
	@include fadein(0.75s, 1s); 

	&.disappear {
		pointer-events: none;
	}

	&::-webkit-scrollbar-track {
		border-radius: 5px;
		background-color: #cccccc;
	}

	&::-webkit-scrollbar {
		width: 5px;
		background-color: #F5F5F5;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #606060;
	}

	.column {
		flex: 50%;
		max-width: 50%;
		padding: 0 0.15vw;

		.portfolio-item {
			position: relative;

			&:hover {
				.item-details {
					opacity: 1;
				}
			}

			img {
				width: 100%;
				opacity: 0.9;
				transition: 0.3s;
			}

			.item-details {
				position: absolute;
				width: 100%;
				height: calc(100% - 4px);
				display: flex;
				justify-content: center;
				flex-direction: column;
				transition: 0.3s;
				top: 0;
				left: 0;
				opacity: 0;
				background: rgba(28, 28, 28, 0.7);
				cursor: pointer;
				padding-top: 0.5vw;
				user-select: none;

				span {
					display: block;
					color: #fff;
					font-size: 1.2vw;
				}
			}
		}
	}
}
</style>