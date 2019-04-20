<template>
	<div class="contact">
		<!-- <vue-particles
			ref="particle"
            color="#ffffff"
            :particleOpacity="1"
            :particlesNumber="120"
            shapeType="circle"
            :particleSize="5"
            linesColor="#ffffff"
            :linesWidth="0.5"
            :lineLinked="false"
            :lineOpacity="0.4"
            :linesDistance="100"
            :moveSpeed="1"
            :hoverEffect="false"
            hoverMode="bubble"
            :clickEffect="true"
            clickMode="repulse"
        /> -->

        <form class="contact-form">
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
	export default {
	}
</script>
<style lang="scss" scoped>
	.contact {
		width: 100%;
		height: 100%;
		
		.contact-form {
			background: #fff;
			padding: 15px;
			border-radius: 5px;
			position: absolute;
			top: 4vw;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 25vw;
			z-index: 999;
			pointer-events: all;

			.form-header {
				margin: 0.5vw 0 1vw 0;
				font-size: $big;
			}

			.form-section {
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 0.85vw;

				.input-label {
					display: block;
					margin-bottom: 0.75vw;
					font-size: $medium;
				}

				.input, .textarea {
					padding: 0.5vw 0.65vw;
					border-radius: 2px;
					border: 1px solid #2c3e50;
					outline: none;
					width: 100%;
					font-size: $medium;
				}

				.textarea {
					resize: none;
					height: 6vw;
				}
			}

			.submit-btn {
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
			}
		}
	}

</style>