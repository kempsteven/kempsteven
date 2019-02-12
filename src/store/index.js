import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
	state:{
		routeAnim: 'router-anim'
	},
	mutations: {
		changeRouteAnim(state, payload){
			switch(payload){
				case 'next':
					state.routeAnim = 'next-router-anim'
					break;
				case 'prev':
					state.routeAnim = 'return-router-anim'
					break;
				default: 
					state.routeAnim = 'router-anim'
					break;
			}
		}
    },

	actions: {
	},

	getters: {
		getRouteAnim: state => state.routeAnim,
	},
})