<template>
	<div class="contact">
		<div class="contact-modal" :class="{ 'no-pointer' : isInteracting}">
			<form class="contact-form" @submit.prevent="sendEmail()">
				<h2 class="form-header">Contact Us</h2>

				<section class="form-section gl-flex">
					<label class="input-label">Name:</label>
					<input class="input" type="text" v-model="email.name" required>
				</section>

				<section class="form-section gl-flex">
					<label class="input-label">Email:</label>
					<input class="input" type="email" v-model="email.email" required>
				</section>

				<section class="form-section gl-flex">
					<label class="input-label">Subject:</label>
					<input class="input" type="text" v-model="email.subject" required>
				</section>

				<section class="form-section gl-flex">
					<label class="input-label">Message:</label>
					<textarea class="textarea" v-model="email.message" maxlength="300"></textarea>
				</section>

				<button class="submit-btn">Send Message</button>
			</form>

			<div class="sending-container" v-if="dynamicGetters('hasSentEmailRequest')" :class="{'active' : dynamicGetters('hasSentEmailRequest') && !dynamicGetters('loading')}">
				<section class="lottie-container">
					<Lottie
						class="lottie"
						:options="errorOptions"
						@animCreated="handleAnimation"
					/>
				</section>

				<section class="error-message">
					<span class="message-title">
						Sorry!
					</span>

					<span class="message-desc">
						{{ dynamicGetters('messageData').message }}
					</span>
				</section>

				<section class="btn-container">
					<button class="try-again-btn" @click="trySendingAgain()">
						Try again
					</button>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as emailModule from '@/store/email/app.js'

import Lottie from 'vue-lottie';
import * as errorAnimation from '@/assets/animation/error.json';
export default {
	data () {
		return {
			email: {
				name: '',
				email: '',
				subject: '',
				message: ''
			},

			errorOptions: {animationData: errorAnimation.default}
		}
	},

	components: {
		Lottie
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting',
			stateData: 'email/getState'
		})
	},

	beforeCreate () {
		if (!this.$store._modulesNamespaceMap['email/']) {
			this.$store.registerModule('email', emailModule.default)
		}
	},

	activated () {
		this.$store.commit('toggleParticle', 'contact')
	},

	methods: {
		sendEmail () {
			let form = new FormData()

			form.append('name', this.email.name)
			form.append('email', this.email.email)
			form.append('subject', this.email.subject)
			form.append('message', this.email.message)

			this.$store.dispatch('email/sendEmail', form)
		},

		handleAnimation(anim) {
			this.anim = anim
			this.anim.setSpeed(1.2)
		},

		trySendingAgain () {
			this.$store.commit('email/setStateData', { hasSentEmailRequest: false })
		},

		dynamicGetters (key) {
			return this.stateData(key)
		},
	}
}
</script>
<style lang="scss" scoped>
	.contact {
		width: 100%;
		min-height: 100%;
		pointer-events: none;

		.contact-modal {
			background: #fff;
			padding: 1.3vw;
			border-radius: 5px;
			margin: 4vw auto 0 auto;
			width: 25vw;
			z-index: 999;
			pointer-events: all;
			position: relative;
			overflow: hidden;

			&.no-pointer {
				pointer-events: none;
			}

			@include mobile {
				width: 90%;
				padding: 15px;
				margin-top: 54px;
			}

			.contact-form {
				width: 100%;

				.form-header {
					margin: 0.5vw 0 1.5vw 0;
					font-size: $big;

					@include mobile {
						margin: 5px 0 15px 0;
						font-size: 18px;
					}
				}

				.form-section {
					flex-direction: column;
					align-items: flex-start;
					margin-bottom: 0.85vw;

					@include mobile {
						margin-bottom: 7px;
					}

					.input-label {
						display: block;
						margin-bottom: 0.75vw;
						font-size: $medium;

						@include mobile {
							font-size: 15px;
							margin-bottom: 5px;
						}
					}

					.input, .textarea {
						padding: 0.5vw 0.65vw;
						border-radius: 2px;
						border: 1px solid #2c3e50;
						outline: none;
						width: 100%;
						font-size: $medium;

						@include mobile {
							font-size: 14px;
							padding: 5px 10px;
						}
					}

					.textarea {
						resize: none;
						height: 6vw;

						@include mobile {
							height: 78px;
						}
					}
				}

				.submit-btn {
					margin-top: 1vw;
					padding: 0.5vw 0.65vw;
					border-radius: 2px;
					border: 0.05vw solid #2c3e50;
					outline: none;
					width: 100%;
					background: none;
					transition: 0.3s;
					font-size: $medium;

					&:hover {
						background: #2c3e50;
						color: #fff;
						cursor: pointer;
					}

					@include mobile {
						padding: 7px 15px;
						font-size: 14px;
						border: 1px solid #2c3e50;
					}
				}
			}

			.sending-container {
				position: absolute;
				top: 0;
				left: 100%;
				width: 100%;
				height: 100%;
				background: #fff;
				transition: 0.3s;

				&.active {
					left: 0;
				}

				.lottie-container {
					width: 40%;
					margin: 4vw auto 0 auto;
				}

				.error-message {
					display: flex;
					flex-direction: column;

					.message-title {
						display: block;
						font-size: $header;
						margin-top: 1vw;
					}

					.message-desc {
						width: 90%;
						margin: 1.5vw auto 0 auto;
						display: block;
						font-size: $big;
						// border: 1px solid #2c3e50;
						// padding: 0.75vw 1vw;
						border-radius: 3px;
						color: #395068;
					}
				}

				.btn-container {
					display: flex;
					justify-content: center;
					margin-top: 4vw;

					.try-again-btn {
						width: 50%;
						border: 2px solid #395068;
						color: #395068;
						padding: 0.75vw 1vw;
						background: none;
						cursor: pointer;
						border-radius: 3px;
						font-size: 1vw;
						transition: 0.3s;
						outline: none;

						&:hover {
							border: 2px solid #759bd8;
							background: #759bd8;
							color: #fff;
						}
					}
				}
			}
		}
	}
</style>