<template>
  <div id="landing-container" class="landing-container gl-flex-vhcenter">
      <div class="video-container gl-col-1">
        <div class="video-filter"></div>
        <video loop muted playsinline oncontextmenu="return false;" @canplaythrough="videoHasBuffered()" class='video' id="video">
          <source :src="require('@/assets/video/coding.mp4')" type="video/mp4" />
          <source :src="require('@/assets/video/coding.webm')" type="video/webm" />
        </video>
        <div class="video-fallback" v-if="!isVideoLoaded">
          <img :src="require('@/assets/img/coding.jpg')">
        </div>
      </div>

      <div class="intro-text-container gl-flex-vhcenter">
        <div class="lottie-container">
          <lottie :options="defaultOptions" @animCreated="handleAnimation"/>
        </div>
        <div class="section gl-flex-vhcenter">
          Hello, Internet!
        </div>
        <div class="section gl-flex-vhcenter">
          My name is Kemp.
        </div>
        <div class="hr"></div>
        <div class="section desc gl-flex-vhcenter">
          An awesome Front end Web Developer that will surely get things done! 
        </div>

        <div class="section desc gl-flex-vhcenter">
         Hit me up if you want to start a project!
        </div>

        <button id="btn" class="btn gl-button full-wdth" @click="start()">
          Let's get started!
        </button>
      </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/profile.json';
export default {
  name: 'landingpage',

  components: {
    'lottie': Lottie
  },

  data () {
    return {
      defaultOptions: {animationData: animationData.default},
      isVideoLoaded: false
    }
  },

  activated(){
    this.playVideo()
  },

  methods:{
    playVideo(){
      var video = document.getElementById('video')
      video.play();
    },

    start(){
      this.$router.push({path: '/profile'})
    },

    videoHasBuffered(){
      this.isVideoLoaded = true
    },

    handleAnimation(anim) {
      this.anim = anim;
      this.anim.setSpeed(1.2)    
    },
  }
}
</script>

<style lang="scss" scoped>
  .landing-container{
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
        flex-direction: column;
    .video-filter{
      background: rgba(0,0,0,0.5);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    .lottie-container{
      z-index: 1;
      overflow: hidden;
      border-radius: 50%;
      height: 20vw;
      width: 20vw;
      padding-right: 0.45vw;
      position: absolute;
      top: -130%;
    }

    .video-container{
      animation-name: appear;
      animation-duration: 0.75s;
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      z-index: 1;
      .video{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        min-width: 50%;
        min-height: 50%;
      }
    }

    .intro-text-container{
      animation-name: appear;
      animation-duration: 0.75s;
      width: 55%;
      z-index: 3;
      color: $white;
      font-size: $header;
      font-weight: 600;
      text-align: center;
      position: relative;
      animation-name: textFromTop;
      animation-duration: 1.5s;

      .hr{
        width: 80%;
        height: 0.1vw;
        background: $white;
        margin: 0.75vw;
      }

      .section{
        height: 17%;
        width: 100%;
        &.desc{
          font-size: $big;
        }
      }

      .btn{
        animation-duration: 1s;
        bottom: -40%;
        position: absolute;
        font-weight: 600;
        font-size: $big;
        user-select: none;
      }
  
    }
  }
</style>
