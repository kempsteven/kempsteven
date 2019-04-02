<template>
	<div class="modal-bg" :class="{ 'closing' : isClosingModal }" @click.self="closeModalBg()">
		<div class="modal">
			<slot name="modal-body"></slot>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			isClosingModal: false
		}
	},

	methods: {
		closeModalBg () {
			this.isClosingModal = true

			setTimeout( ()=> {
				this.isClosingModal = false
				this.$store.commit('setModal', false)
			}, 700)
		}
	}
}	
</script>
<style lang="scss" scoped>
.modal-bg {
	position: fixed;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
	z-index: 999;
	opacity: 0;
	@include fadein(0.3s, 0)

	&.closing {
		opacity: 1;
		@include fadeout(0.4s, 0.3s)

		.modal {
			opacity: 1;
			@include fadeouttotop(0.3s, 0)
		}
	}

	.modal {
		// padding: 0.75vw;
		// background: #fff;
		// border-radius: 2px;
		opacity: 0;
		@include fadeinfromtop(0.3s, 0.3s)
	}
}
</style>