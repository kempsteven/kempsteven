<template>
  <div id="profile-container" class="profile-container gl-flex-vhcenter">
    <div class="video-filter"></div>
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
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="bubble"
        :clickEffect="true"
        clickMode="repulse"
    />
    <div class="profile-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created(){
  },

  activated(){
  },

  methods:{
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


</style>
