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
import { mapGetters } from 'vuex'
export default {
  name: 'app',

  components: {
    'header-div': headerDiv
  },

  computed: {
    ...mapGetters({
      routerAnim: 'getRouteAnim'
    })
  },

  data () {
    return {
  
    }
  },

  method: {
    
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
</style>
