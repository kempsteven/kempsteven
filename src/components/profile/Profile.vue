<template>
  <div id="profile-container" class="profile-container gl-flex-vhcenter">
    <div class="video-filter" :class="{ 'disappear' : isInteracting}"/>
    <vue-particles
        color="#282828"
        :particleOpacity="0.7"
        :particlesNumber="80"
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

    <div class="profile-wrapper" :class="isInteracting ? 'disappear' : 'appear'">
      <router-view/>
    </div>

    <div class="navigation-wrapper" :class="{ 'disappear' : isInteracting}">
      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == '/profile'}" 
           @click="$router.push('/profile')">
        <button/>
      </div>

      <div class="circle-btn gl-flex-vhcenter" :class="{ 'active' : $route.path == 'aasd'}" 
           @click="$router.push('/profile')">
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

    <div class="next-wrapper" :class="{ 'disappear' : isInteracting}">
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
export default {
  data () {
    return {
      isInteracting: false,
      isAnimating: false
    }
  },

  created(){
  },

  activated(){
  },

  methods:{
    removeDetails(){
      this.isInteracting = !this.isInteracting
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
          animation: appear 0.75s ease-in-out 1s;
          animation-fill-mode: forwards; 
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
    padding: 1.3vw 0.83vw 0.3vw 0.83vw;
    cursor: pointer;
    z-index: 2;
    border: 1px solid $black;
    border-radius: 50%;
    opacity: 0;
    animation: textFromTop 0.75s ease-in-out 0.5s;
    animation-fill-mode: forwards; 
    box-shadow: 2px 2px 10px #888888;
    transition: 0.3s;
    user-select: none;
    .arrow{
      transition: 0.5s;
      border-top: 0.75vw solid $black;
      border-left: 0.75vw solid transparent; 
      border-bottom: 0.75vw solid transparent;
      border-right: 0.75vw solid transparent;
    }

    &:hover{
      box-shadow: none;
      background: $blue;
      .arrow{
        border-top: 0.75vw solid white;
        border-left: 0.75vw solid transparent; 
        border-bottom: 0.75vw solid transparent;
        border-right: 0.75vw solid transparent;
      }
    }
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
  }

  .disappear{
    opacity: 1;
    animation: disappear 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }


</style>
