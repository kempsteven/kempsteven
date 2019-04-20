<template>
	<div class="portfolio-info">
		<span>My Portfolio</span>

		<div class="row" :class="{ 'disappear' : isInteracting }">
			<div class="column">
				<div 
					class="portfolio-item" 
					@click="viewPortfolio(
						{
							title: 'Prominence Website', 
							desc: 'A website that contains information about a comic, a gallery, and a place to read the comic, it also has an admin side where you can add an image to the gallery, or add edit a chapter for the comic, the comic was made by me and my friends on highschool, this website is tested in Chrome, Mozilla and Mobile view.', 
							tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
							img: [
									require('@/assets/img/portfolio/prominence/desktop.webp'), 
									require('@/assets/img/portfolio/prominence/mobile.webp')
								],
							link: 'http://prominence.ga/'
						}
					)"
				>
					<img :src="require('@/assets/img/portfolio/prominence/desktop.webp')" alt="Portfolio Image">

					<div class="item-details">
						<span>Prominence Website</span>
					</div>
				</div>
			</div>

			<div class="column">
				<div 
					class="portfolio-item" 
					@click="viewPortfolio(
						{
							title: 'Accursed Website', 
							desc: `A website that contains information about a Horror Game, the Horror game was made by me and my thesis group for our requirements in our bachelor's degree, this website is tested in Chrome, Mozilla and Mobile view.`, 
							tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
							img: [
									require('@/assets/img/portfolio/accursed/desktop.webp'), 
									require('@/assets/img/portfolio/accursed/mobile.webp')
								],
							link: 'https://accursed.ga/'
						}
					)"
				>
					<img :src="require('@/assets/img/portfolio/accursed/desktop.webp')" alt="Portfolio Image">

					<div class="item-details">
						<span>Accursed Website</span>
					</div>
				</div>
			</div>
		</div>

		<Modal v-if="modalStatus">
			<div class="portfolio-viewer" slot="modal-body">
				<div class="img-container">
					<div class="img-web">
						<img :src="selectedPortfolio.img[0]" alt="Portfolio Image">
					</div>

					<div class="img-mobile">
						<img :src="selectedPortfolio.img[1]" alt="Portfolio Image">
					</div>
				</div>

				<div class="portfolio-details">
					<div class="project-name">
						{{ selectedPortfolio.title }}
					</div>

					<div class="project-desc">
						{{ selectedPortfolio.desc }}
					</div>

					<div class="project-tech">
						<div class="tech" :key="key" v-for="(item, key) in selectedPortfolio.tech">
							{{ item }}
						</div>
					</div>

					<div class="btn-container">
						<a target="_black" :href="selectedPortfolio.link" class="view">View Website</a>
					</div>
				</div>
			</div>
		</Modal>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Modal from '@/components/global/Modal'
export default {
	components: {
		Modal
	},

	data () {
		return {
			selectedPortfolio: {}
		}
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting',
			modalStatus: 'getModalStatus'
		})
	},

	methods: {
		viewPortfolio (portFolioDetails) {
			this.selectedPortfolio = portFolioDetails
			this.$store.commit('setModal', true)
		}
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

.portfolio-viewer {
	width: 73vw;
	display: flex;

	.img-container {
		flex-shrink: 0;
		width: 40%;
		position: relative;
		height: 15vw;
		user-select: none;
		margin-right: 1vw;


		.img-web {
			width: 100%;
			padding: 0.25vw;
			border: 0.1vw solid #505050;
			border-radius: 2px;
			position: absolute;
			background: #212121;

			img {
				width: 100%;
			}
		}

		.img-mobile {
			width: 25%;
			padding: 0.5vw 0.25vw 0.8vw 0.25vw;
			border: 0.1vw solid #505050;
			border-radius: 10px;
			position: absolute;
			background: #212121;
			right: 3vw;
			bottom: -5vw;
			min-height: 95px;

			img {
				width: 100%;
			}

		}
	}

	.portfolio-details {
		text-align: left;
		font-size: 1vw;
		padding: 0.75vw;
		background: #fff;
		border-radius: 2px;

		.project-name {
			width: auto;
			margin-bottom: 1vw;
			font-size: 1.5vw;
			font-weight: 600;
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			padding: 0.5vw 3vw;
			border-radius: 2px;
			text-align: center;
		}

		.project-desc {
			margin-bottom: 1vw;
			padding: 0.75vw;
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			border-radius: 2px;
			min-height: 10vw;
		}

		.project-tech {
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			padding: 0.75vw;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 1vw;

			.tech {
				background: $blue;
				color: #fff;
				padding: 0.35vw 0.75vw;
				border-radius: 2px;
				user-select: none;

				&:not(:last-child) {
					margin-right: 0.75vw;
				}
			}
		}

		.btn-container {
			display: flex;
			justify-content: flex-end;

			.view {
				border: 0.2vw solid white;
				color: white;
				padding: 0.75vw 3vw;
				transition: 0.4s;
				border-radius: 1px;
				background: $blue;
				cursor: pointer;
				outline: none;
				transition: 0.3s;
				line-height: 0.85vw;
				text-decoration: none;

				&:hover {
					background: darken($blue, 5%);
				}
			}
		}
	}
}
</style>