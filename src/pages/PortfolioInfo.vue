<template>
	<div class="portfolio-info">
		<span class="portfolio-header">
			My Portfolio
		</span>

		<div class="lottie-container" v-if="loading">
			<Lottie
				class="lottie"
				:options="defaultOptions"
				@animCreated="handleAnimation"
			/>

			<span class="loading-label">
				Loading...
			</span>
		</div>

		<transition name="g-transition">
			<div
				class="portfolio-container scroll"
				:class="{ 'disappear' : isInteracting }"
				v-if="!loading"
			>
				<div
					class="portfolio-item"
					v-for="(portfolio, key) in list.list"
					:key="key"
					@click="viewPortfolio(
						{
							title: portfolio.portfolioTitle,
							desc: portfolio.portfolioDescription,
							tech: portfolio.portfolioTechnologies.split(','),
							img: [
									portfolio.portfolioDesktopImg.url,
									portfolio.portfolioMobileImg.url
								],
							link: portfolio.portfolioUrl
						}
					)"
				>
					<img
						class="item-img"
						:src="portfolio.portfolioDesktopImg.url"
						alt="Portfolio Image"
					>

					<div class="item-details">
						{{ portfolio.portfolioTitle }}
					</div>
				</div>
			</div>
		</transition>

		<Modal v-if="modalStatus" ref="viewerModal">
			<div class="portfolio-viewer" slot="modal-body">
				<div class="img-container">
					<div class="img-web">
						<div class="img-screen">
							<img :src="selectedPortfolio.img[0]" alt="Portfolio Image">
						</div>
					</div>

					<div class="img-mobile">
						<img :src="selectedPortfolio.img[1]" alt="Portfolio Image">
					</div>
				</div>

				<div class="portfolio-details">
					<div class="project-name">
						{{ selectedPortfolio.title }}
					</div>

					<div class="project-desc scroll small-scroll">
						{{ selectedPortfolio.desc }}
					</div>

					<div class="project-tech">
						<div
							class="tech"
							:key="key"
							v-for="(item, key) in selectedPortfolio.tech"
						>
							{{ item }}
						</div>
					</div>

					<div class="btn-container">
						<button class="close" @click="closeModal()">
							Close
						</button>

						<a
							target="_black"
							:href="selectedPortfolio.link"
							class="view"
						>
							View Website
						</a>
					</div>
				</div>
			</div>
		</Modal>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as portfolioModule from '@/store/portfolio/app.js'

import * as animationData from '@/assets/animation/loading.json';
export default {
	components: {
		Modal: () => import('@/components/global/Modal'),
		Lottie: () => import('vue-lottie')
	},

	data () {
		return {
			selectedPortfolio: {},
			defaultOptions: {animationData: animationData.default},
		}
	},

	async created () {
		await this.getPortfolioList()
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting',
			modalStatus: 'getModalStatus',
			list: 'portfolio/getList',
			loading: 'portfolio/getLoading'
		})
	},

	beforeCreate () {
		if (!this.$store._modulesNamespaceMap['portfolio/']) {
			this.$store.registerModule('portfolio', portfolioModule.default)
		}
	},

	deactivated () {
		if (this.modalStatus) {
			this.$refs.viewerModal.closeModalBg()
		}
	},

	methods: {
		viewPortfolio (portFolioDetails) {
			this.selectedPortfolio = portFolioDetails
			this.$store.commit('setModal', true)
		},

		closeModal () {
			this.$refs.viewerModal.closeModalBg()
		},

		async getPortfolioList () {
			await this.$store.dispatch('portfolio/getPortfolioList')
		},

		dynamicGetters (key) {
			return this.stateData(key)
		},

		handleAnimation (anim) {
			this.anim = anim;
			this.anim.setSpeed(1.7)
		}
	}
}
</script>
<style lang="scss" scoped>
.portfolio-info {
	width: 100%;
	min-height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@include mobile {
		justify-content: flex-start;
	}

	.portfolio-header {
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

		@include mobile {
			font-size: 18px;
			width: 70%;
			padding: 5vw;
			margin-top: 80px;
		}
	}
}

.lottie-container{
	width: 30%;
	height: 30%;
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

		.lottie {
			height: auto;
		}

		.loading-label {
			font-size: 14px;
			margin-top: 0;
			padding-top: 0;
		}
	}
}

.portfolio-container {
	display: flex;
	overflow-y: auto;
	overflow-x: hidden;
	flex-wrap: wrap;
	width: 100%;
	height: 65vh;
	margin-top: 1vh;
	pointer-events: all;
	opacity: 0;
	align-items: flex-start;
	@include fadein(0.75s, 1s);

	@include mobile {
		width: 70%;
		height: auto;
		max-height: 275px;
		margin: 0 auto 0 auto;
	}

	&.disappear {
		pointer-events: none;
	}

	.portfolio-item {
		flex: 0 1 49%;
		max-width: 50%;
		height: 18vw;
		position: relative;
		overflow: hidden;
		margin-bottom: 0.15vw;
		opacity: 1;
		transition: 0.3s;
		border-radius: 3px;
		cursor: pointer;

		@include mobile {
			max-width: unset;
			flex: 0 0 auto;
			width: 100%;
			height: 40vw;

			&:not(:last-child) {
				margin-bottom: 15px;
			}
		}

		&:nth-child(odd) {
			margin-right: 0.15vw;
		}

		&:hover {
			opacity: 0.9;
		}

		.item-img {
			min-width: 100%;
			height: 100%;
			opacity: 0.9;
			transition: 0.3s;
		}

		.item-details {
			position: absolute;
			bottom: 0.7vw;
			left: 0;
			right: 0;
			margin: 0 auto;
			color: #fff;
			font-weight: 600;
			font-size: 1.2vw;
			text-shadow: 2px 2px 10px rgb(71, 71, 71);
		}
	}
}

.portfolio-viewer {
	width: 73vw;
	display: flex;

	@include mobile {
		flex-wrap: wrap;
	}

	.img-container {
		flex-shrink: 0;
		width: 40%;
		height: 20vw;
		position: relative;
		user-select: none;
		margin-right: 1vw;

		@include mobile {
			width: 100%;
			height: 173px;
			padding: 0;
			margin-bottom: 5px;
		}

		.img-web {
			width: 100%;
			height: 100%;
			padding: 0.25vw;
			border: 0.1vw solid #505050;
			border-radius: 3px;
			position: absolute;
			background: #212121;

			@include mobile {
				height: 150px;
				padding: 2px;
				border: 1px solid #505050;
				overflow: hidden;
			}

			.img-screen {
				width: 100%;
				height: 100%;
				background: #000000;
				display: flex;
				align-items: center;

				img {
					width: 100%;

					@include mobile {
						width: 100%;
					}
				}
			}
		}

		.img-mobile {
			width: 25%;
			padding: 0.25vw;
			border: 0.1vw solid #505050;
			border-radius: 5px;
			position: absolute;
			background: #212121;
			right: 1.5vw;
			bottom: -3.45vw;

			@include mobile {
				padding: 2px;
				border: 1px solid #505050;
				right: 15px;
				bottom: 10px;
			}

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

		@include mobile {
			width: 100%;
			flex-shrink: 0;
			font-size: 14px;
			padding: 10px;
			margin-bottom: 15px;
		}

		.project-name {
			width: auto;
			margin-bottom: 1vw;
			font-size: 1.5vw;
			font-weight: 600;
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			padding: 0.5vw 3vw;
			border-radius: 2px;
			text-align: center;

			@include mobile {
				font-size: 14px;
				padding: 10px;
				margin-bottom: 7px;
			}
		}

		.project-desc {
			margin-bottom: 1vw;
			padding: 0.75vw;
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			border-radius: 2px;
			min-height: 10vw;

			@include mobile {
				padding: 15px;
				margin-bottom: 7px;
				max-height: 80px;
				overflow: scroll;
				font-size: 12px;
			}
		}

		.project-tech {
			box-shadow: 1px 1px 5px 1px rgba(0,0,0,.1);
			padding: 0.75vw;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 1vw;

			@include mobile {
				padding: 15px;
				margin-bottom: 7px;
			}

			.tech {
				background: $blue;
				color: #fff;
				padding: 0.35vw 0.75vw;
				border-radius: 2px;
				user-select: none;

				&:not(:last-child) {
					margin-right: 0.75vw;
				}

				@include mobile {
					padding: 5px 10px;
					margin-bottom: 5px;
					font-size: 12px;

					&:not(:last-child) {
						margin-right: 5px;
					}
				}
			}
		}

		.btn-container {
			display: flex;
			justify-content: flex-end;

			.close {
				margin-right: 0.75vw;
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
				font-size: 1vw;

				&:hover {
					background: darken($blue, 5%);
				}

				@include mobile {
					font-size: 12px;
					padding: 15px 15px;
					line-height: 0px;
				}
			}

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

				@include mobile {
					font-size: 12px;
					padding: 15px 15px;
					line-height: 0px;
				}
			}
		}
	}
}
</style>