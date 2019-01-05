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
      prevRoutes: {
        to: '',
        from: ''
      },

      routerAnim: 'router-anim'
    }
  },

  watch: {
    '$route' (to, from) {
      if(!this.prevRoutes.to || !this.prevRoutes.from){
        this.prevRoutes.to = to.name
        this.prevRoutes.from = from.name
      }
      
      if(to.name == this.prevRoutes.from) {
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
}

#ball{
  position: fixed;
  z-index: 10;
  bottom: 0%;
  left: -6%;
  width: 5vw;
  animation-name: spin;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count:infinite;
}

html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
