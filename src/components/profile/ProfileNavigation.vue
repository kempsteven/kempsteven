<template>
	<div class="profile-navigation">
		<div class="landing-back-wrapper gl-nav-button left-nav" :class="{ 'disappear' : isInteracting}" @click="returnToMain()">
	      	<div class="arrow"></div>
	    </div>

	    <div class="navigation-wrapper" :class="{ 'disappear' : isInteracting}">
	      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/profile'}" 
	           @click="$router.push('/profile')">
	        <button/>
	      </div>

	      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/education'}" 
	           @click="$router.push('/education')">
	        <button/>
	      </div>

	      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/asda'}" 
	           @click="$router.push('/profile')">
	        <button/>
	      </div>

	      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/proasadsfile'}" 
	           @click="$router.push('/profile')">
	        <button/>
	      </div>
	    </div>

	    <div class="next-wrapper gl-nav-button" @click="nextRoute()" :class="{ 'disappear' : isInteracting}">
	      <div class="arrow"></div>
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
	  },
	methods: {
		returnToMain(){
	      this.$store.commit('changeRouteAnim', 'prev')
	      this.$router.push({ path: '/' })
	    },

	    nextRoute(){
	      this.$store.commit('changeRouteAnim', 'profile-next')
	      this.$router.push({ path: '/education' })
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
	}

	.navigation-wrapper{
	    position: absolute;
	    bottom: 35%;
	    right: 3%;
	    z-index: 2;
	    display: flex;
	    flex-direction: column;
	    opacity: 0;
	    animation: fromRight 0.75s ease-in-out 0.5s;
	    animation-fill-mode: forwards; 

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

	.next-wrapper{
	    position: absolute;
	    bottom: 5%;
	}
}
</style>