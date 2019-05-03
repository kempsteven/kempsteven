<template>
	<div class="contact">
		<form class="contact-form" :class="{ 'no-pointer' : isInteracting}">
			<h2 class="form-header">Contact Us</h2>

			<section class="form-section gl-flex">
				<label class="input-label">Name:</label>
				<input class="input" type="text" required>
			</section>

			<section class="form-section gl-flex">
				<label class="input-label">Email:</label>
				<input class="input" type="email" required>
			</section>

			<section class="form-section gl-flex">
				<label class="input-label">Subject:</label>
				<input class="input" type="text" required>
			</section>

			<section class="form-section gl-flex">
				<label class="input-label">Message:</label>
				<textarea class="textarea" maxlength="300"></textarea>
			</section>

			<button class="submit-btn">Send Message</button>
		</form>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting'
		})
	},

	activated () {
		this.$store.commit('toggleParticle', 'contact')
	}
}
</script>
<style lang="scss" scoped>
	.contact {
		width: 100%;
		height: 100%;
		pointer-events: none;
		
		.contact-form {
			background: #fff;
			padding: 1.3vw;
			border-radius: 5px;
			position: absolute;
			top: 4vw;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 25vw;
			z-index: 999;
			pointer-events: all;

			&.no-pointer {
				pointer-events: none;
			}

			@include mobile {
				width: 90%;
				padding: 15px;
				top: 60px;
			}

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
					margin-bottom: 10px;
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
						height: 95px;
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
	}

</style>