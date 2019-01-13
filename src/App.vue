<template>
  <div id="app">
    <header-div/>
      <transition :name="routerAnim">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
import headerDiv from '@/components/global/Header'
export default {
  name: 'app',

  components: {
    'header-div': headerDiv
  },

  data () {
    return {
      onCreatedRoute: '',
      prevRoute: '',
      routerAnim: 'router-anim',
      prevRouteofCurrent:{
        landingpage: '',
        'personal-info': 'landingpage'
      }
    }
  },

  created(){
    if(this.$route.name == 'personal-info'){
      this.prevRoute = 'landingpage'
    }
  },

  watch: {
    '$route' (to, from) {
      if(!this.prevRoute){
        this.prevRoute = from.name
      }
      
      if(to.name == this.prevRoute) {
        this.routerAnim = 'return-router-anim'
      } else {
        this.routerAnim = 'router-anim'
      }
    }
  }
}
</script>

<style lang="scss">

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $black;
}

html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
