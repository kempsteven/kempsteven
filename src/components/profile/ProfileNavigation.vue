<template>
	<div class="profile-navigation">
		<div class="landing-back-wrapper gl-nav-button left-nav" :class="{ 'disappear' : isInteracting}" @click="returnToMain()">
			<div class="arrow"></div>
		</div>

		<div class="navigation-wrapper" :class="{ 'disappear' : isInteracting}">
			<div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/profile'}" 
				@click="changeRoute('personal-info')">
				<button/>
			</div>

			<div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/skills'}" 
				@click="changeRoute('skills-info')">
				<button/>
			</div>

			<div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/portfolio'}" 
				@click="changeRoute('portfolio-info')">
				<button/>
			</div>

			<div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/education'}" 
				@click="changeRoute('education-info')">
				<button/>
			</div>
		</div>

		<div 
			class="prev-wrapper gl-nav-button top-nav" 
			@click="changeProfileRoute('prev')" 
			:class="{ 'disappear' : isInteracting}"
			v-if="$route.name !== 'personal-info'"
		>
			<div class="arrow"></div>
		</div>

		<div 
			class="next-wrapper gl-nav-button" 
			@click="changeProfileRoute('next')" 
			:class="{ 'disappear' : isInteracting}"
		>
			<div class="arrow"></div>
		</div>

		<div class="remove-wrapper">
			<button @click="removeDetails()">
				{{isInteracting ? 'Go Back' : 'Interact With Background'}}
			</button>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			routeSequence: ['landing-page', 'personal-info', 'skills-info', 'portfolio-info', 'education-info']
		}
	},

	computed: {
		...mapGetters({
			isInteracting: 'getIsInteracting'
		})
	},
	methods: {
		returnToMain(){
			this.changeRoute('landing-page')
		},

		changeProfileRoute(type){
			var currentRoutePlacement = this.routeSequence.indexOf(this.$route.name)
			var changeRouteTo 

			if (type === 'prev') {
				changeRouteTo = this.routeSequence[currentRoutePlacement - 1]
				this.$store.commit('changeRouteAnim', 'profile-prev')
			} else {
				changeRouteTo = this.routeSequence[currentRoutePlacement + 1]
				this.$store.commit('changeRouteAnim', 'profile-next')
			}


			this.changeRoute(changeRouteTo)
		},

		async changeRoute(routeName){
			await this.routeAnimHandler(routeName)
			this.$router.push({ name: routeName })
		},

		routeAnimHandler(nextRouteName){
			let routeAnim
			var currentRoutePlacement = this.routeSequence.indexOf(this.$route.name)
			var nextRoutePlacement = this.routeSequence.indexOf(nextRouteName)

			if (nextRoutePlacement === 0) {
				routeAnim = 'prev'
			} else if (currentRoutePlacement < nextRoutePlacement) {
				routeAnim = 'profile-next'
			} else if (currentRoutePlacement > nextRoutePlacement) {
				routeAnim = 'profile-prev'
			}

			this.$store.commit('changeRouteAnim', routeAnim)
		},

		removeDetails(){
            this.$store.commit('toggleIsInteracting')
        }
	}
}	
</script>
<style lang="scss" scoped>
.profile-navigation {

	.landing-back-wrapper{
		position: absolute;
		left: 1%;
		top: 47vh;
		opacity: 0;
		@include fadeinfromleft(0.75s, 0.5s);

		&.disappear{
			opacity: 1;
			pointer-events: none;
			@include fadeout(0.5s, 0s);
		}
	}

	.navigation-wrapper{
		position: absolute;
		bottom: 35%;
		right: 3%;
		z-index: 2;
		display: flex;
		flex-direction: column;
		opacity: 0;
		@include fadeinfromright(0.75s, 0.5s);

		&.disappear{
			opacity: 1;
			pointer-events: none;
			@include fadeout(0.5s, 0s);
		}

		.circle-btn{
			padding: 0.3vw;
			border: 1px solid $black;
			border-radius: 50%;
			outline: none;
			margin-bottom: 0.75vw;
			cursor: pointer;
			box-shadow: 2px 2px 10px #888888;
			transition: 0.3s;

			button{
				pointer-events:none;
				padding: 0.5vw;
				border: none;
				border-radius: 50%;
				background: none;
				opacity: 0;
				transition: 0.5s;
			}

			&.active{
				box-shadow: none;

				button{
					opacity: 1; 
					background: $black;
				}
			}

			&:hover{
				box-shadow: none;

				button{
					opacity: 1; 
					background: $black;
				}
			}
		}
	}
 
	.prev-wrapper{
		position: absolute;
		top: 5%;
		left: 48%;
		opacity: 0;
		@include fadeinfromtop(0.75s, 0.5s);

		&.disappear{
			opacity: 1;
			pointer-events: none;
			@include fadeout(0.5s, 0s);
		}
	}

	.next-wrapper{
		position: absolute;
		bottom: 5%;
		left: 48%;
		opacity: 0;
		@include fadeinfrombottom(0.75s, 0.5s);

		&.disappear{
			opacity: 1;
			pointer-events: none;
			@include fadeout(0.5s, 0s);
		}
	}
}

.disappear{
	opacity: 1;
	pointer-events: none;
	@include fadeout(0.5s, 0s);
}

.remove-wrapper{
	position: absolute;
	z-index: 2;
	bottom: 6%;
	right: 3%;
	opacity: 0;
	@include fadeinfrombottom(0.75s, 0.5s);

	button{
		width: 100%;
		height: 100%;
		border: 1px solid $black;
		padding: 0.75vw 1vw;
		background: none;
		cursor: pointer;
		border-radius: 2px;
		font-size: $medium;
		box-shadow: 2px 2px 10px #888888;
		transition: 0.3s;
		outline: none;

		&:hover{
			box-shadow: none;
		}
	}
}
</style>