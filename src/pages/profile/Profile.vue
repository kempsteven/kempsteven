<template>
  <div id="profile-container" class="profile-container gl-flex-vhcenter">
    <div class="video-filter" :class="{ 'disappear' : isInteracting}"/>
    <vue-particles
        color="#282828"
        :particleOpacity="0.7"
        :particlesNumber="110"
        shapeType="circle"
        :particleSize="0"
        linesColor="#282828"
        :linesWidth="0.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="bubble"
        :clickEffect="true"
        clickMode="repulse"
    />

    <ProfileNavigation />

    <div class="profile-wrapper" :class="isInteracting ? 'disappear' : 'appear'">
      <transition :name="routerAnim">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
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
import ProfileNavigation from '@/components/profile/ProfileNavigation'
export default {
  name: 'Profile',

  components: {
    ProfileNavigation
  },

  computed: {
    ...mapGetters({
      routerAnim: 'getRouteAnim',
      isInteracting: 'getIsInteracting'
    })
  },

  methods:{
    removeDetails(){
      this.$store.commit('toggleIsInteracting')
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile-container{
    background: $background;
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    flex-direction: column;
  }

  .video-filter{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  #particles-js{
    width: 100%;
    height: 100%;
  }

  .profile-wrapper{
    width: 65%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }

  .remove-wrapper{
    position: absolute;
    z-index: 2;
    bottom: 6%;
    right: 3%;
    opacity: 0;
    animation: textFromTop 0.75s ease-in-out 0.5s;
    animation-fill-mode: forwards;
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

  .appear{
    animation: appear 0.5s ease-in-out;
    animation-fill-mode: forwards; 
    pointer-events: none;
  }

  .disappear{
    opacity: 1;
    pointer-events: none;
    animation: disappear 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }


</style>
