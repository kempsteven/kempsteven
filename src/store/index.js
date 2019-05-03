import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
	state:{
		routeAnim: 'router-anim',
		isInteracting: false,
		modalStatus: false,
		activeParticle: ''
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
				case 'default': 
					state.routeAnim = 'router-anim'
					break;
			}
		},

		toggleParticle (state, payload) {
			state.activeParticle = payload
		},

		toggleIsInteracting(state) {
			state.isInteracting = !state.isInteracting
		},

		setModal(state, payload) {
			state.modalStatus = payload
		}
    },
    
	getters: {
		getRouteAnim: state => state.routeAnim,
		getIsInteracting: state => state.isInteracting,
		getModalStatus: state => state.modalStatus,
		getActiveParticle: state => state.activeParticle,
	},
})