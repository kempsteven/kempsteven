<template>
  <div id="landing-container" class="landing-container gl-flex-vhcenter">
    <lottie :options="defaultOptions" :height="400" :width="400" @animCreated="handleAnimation"/>
<!--       <div>
          <p>Speed: x{{animationSpeed}}</p>
          <input type="range" value="1" min="0" max="3" step="0.5"
                 @change="onSpeedChange" v-model="animationSpeed">
      </div>
      <button @click="stop">stop</button>
      <button @click="pause">pause</button>
      <button @click="play">play</button> -->
  </div>
</template>

<script>
  import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/profile.json';
export default {
  name: 'Home',

  components: {
    'lottie': Lottie
  },

  data () {
    return {
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1
    }
  },

  created(){
  },

  activated(){
  },

  methods:{
    handleAnimation(anim) {
      this.anim = anim;
    },

    // stop() {
    //   this.anim.stop();
    // },

    // play() {
    //   this.anim.play();
    // },

    // pause() {
    //   this.anim.pause();
    // },

    // onSpeedChange() {
    //   this.anim.setSpeed(this.animationSpeed);
    // }
  }
}
</script>

<style lang="scss" scoped>
  .landing-container{
    background: black;
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;

    // .video-filter{
    //   background: rgba(0,0,0,0.5);
    //   position: fixed;
    //   width: 200%;
    //   height: 200%;
    //   z-index: 2;
    // }

    .video-container{
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
      width: 50%;
      z-index: 3;
      color: $white;
      font-size: $header;
      font-weight: 600;
      text-align: center;
      position: relative;
      padding-bottom: 4vw;

      .hr{
        width: 80%;
        height: 0.08vw;
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
        transition: 0;
        // animation-name: floating;
        // animation-iteration-count:infinite;
        // animation-timing-function: linear;
        // animation-duration: 1s;
        bottom: -20%;
        position: absolute;
        font-weight: 600;
        font-size: $big;
        user-select: none;
      }
  
    }
  }
</style>
