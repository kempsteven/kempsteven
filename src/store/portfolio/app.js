import api from '../api'

export const state = {
	list: {},
	loading: false
}

export const mutations = {
	setStateData({}, payload) {
		for (let stateKey in payload) {
			state[stateKey] = payload[stateKey]
		}
	}
}

export const actions = {

	async getPortfolioList ({ commit }) {
		await commit('setStateData', { list: {} , loading: true })

		const { data, status } = await api('get', '/portfolio/get-portfolio')

		await commit('setStateData', { list: data, loading: false })
	}

}

export const getters = {
	getList: state => state.list,
	getLoading: state => state.loading
}

export default {
	state,
	mutations,
	actions,
	getters,
	namespaced: true
}
