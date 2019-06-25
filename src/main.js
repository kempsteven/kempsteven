import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import testPlugin from './plugin/testPlugin'

library.add(farStar, fasStar, faStarHalfAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(testPlugin, {
  job: 'Web Dev'
})

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')