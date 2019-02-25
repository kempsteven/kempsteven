import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
	state:{
		routeAnim: 'router-anim',
		isInteracting: false
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
				case 'profile-next':
					state.routeAnim = 'profile-next-router-anim'
					break;
				case 'profile-prev':
					state.routeAnim = 'profile-return-router-anim'
					break;
				default: 
					state.routeAnim = 'router-anim'
					break;
			}
		},

		toggleIsInteracting(state, payload) {
			state.isInteracting = !state.isInteracting
			console.log(state.isInteracting)
		}
    },
    
	getters: {
		getRouteAnim: state => state.routeAnim,
		getIsInteracting: state => state.isInteracting
	},
})