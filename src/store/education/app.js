import api from '../api'

export const state = {
    list: {},
    loading: false
}

export const mutations = {
    setStateData(state, payload) {
        for (let stateKey in payload) {
            state[stateKey] = payload[stateKey]
        }
    }
}

export const actions = {

    async getEducationList({ commit }) {
        await commit('setStateData', { list: {}, loading: true })

        const { data } = await api('get', '/education/get-education')

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
