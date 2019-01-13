<template>
  <div class="personal-container gl-flex-vhcenter">
    <div class="info-container gl-flex-vhcenter">
      <div class="left">
        <div class="image-container gl-flex-vhcenter appear">
          <img id="picture" :src="require('@/assets/img/picture.png')" alt="profile picture" :class="{ 'img-appear' : imgHasloaded}" v-shoe="imgHasloaded">

          <div class="lottie-container" v-if="!imgHasloaded">
            <lottie class="lottie" :options="defaultOptions" @animCreated="handleAnimation" />
          </div>
          
        </div>
      </div>

      <div class="right gl-flex">
        <div class="section appear">Hello, I am </div>
        <div class="section name text-from-top">Kemp Sayson!</div>

        <div class="section has-child gl-flex">
         <div class="label appear gl-flex-vhcenter">A</div>
         <div class="label gl-flex-vhcenter job text-from-top">Front End Developer,</div>
        </div>

        <div class="section has-child gl-flex">
         <div class="label appear gl-flex-vhcenter">Based on</div>
         <div class="label gl-flex-vhcenter job text-from-top">Manila, Philippines</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/loading.json';
export default {

  components: {
    'lottie': Lottie
  },

  data () {
    return {
      defaultOptions: {animationData: animationData.default},
      imgHasloaded: false
    }
  },

  activated(){
    this.imageHandler()
  },

  methods:{
    imageHandler(){
      var image = document.getElementById('picture')

      image.onload = () => {
        // this.anim.stop();
        this.imgHasloaded = true
      }
    },

    handleAnimation(anim) {
      this.anim = anim;
      this.anim.setSpeed(1.7)    
    },
  }
}
</script>

<style lang="scss" scoped>
  .personal-container{
    width: 100%;
    height: 100%;
  }

  .info-container{
    width: 80%;
    height: 100%;
    user-select: none;
    .left{
      width: 35%;
      height: 17.5vw;
      .image-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        border: 1px solid $black;
        border-radius: 50%;
        // background: #f2f2f2;
        opacity: 0;
        img{
          opacity: 0;
          width: auto;
          height: 100%;
        }
      }
    }

    .right{
      // border: 1px solid #c6c6c6;
      width: 65%;
      padding-left: 4vw;
      flex-direction: column;
      .section{
        color: $black;
        font-weight: 600;
        font-size: $header;
        width: 100%;
        text-align: left;
        opacity: 0;

        &.name{
          font-size: 3.5vw;
          color: #759bd8;
          margin-bottom: 1vw;
        }

        &.has-child{
          opacity: 1;
        }

        .label{
          font-size: 1.5vw;
          opacity: 0;
          &.job{
            margin-left: 0.5vw; 
            color: #759bd8;
            font-size: 2vw;
          }
        }
      }
    }

    .lottie-container{
      width: 100%;
      height: 100%;
      background: #f2f2f2;
      padding: 3vw;
      opacity: 0;
      animation: appear 0.75s ease-in-out 0.5s;
      animation-fill-mode: forwards; 
    }

    

    .text-from-top{ 
      animation: textFromTop 0.75s ease-in-out 0.5s;
      animation-fill-mode: forwards; 
    }

    .img-appear{
      animation: appear 0.75s ease-in-out 0.5s;
      animation-fill-mode: forwards; 
    }

    .appear{
      animation: appear 0.75s ease-in-out 0.5s;
      animation-fill-mode: forwards; 
    }
  }


</style>
