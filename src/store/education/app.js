import api from '../api'

export const state = {
    list: {},
    loading: false
}

export const mutations = {
    setStateData({ }, payload) {
        for (let stateKey in payload) {
            state[stateKey] = payload[stateKey]
        }
    }
}

export const actions = {

    async getEducationList({ commit }) {
        await commit('setStateData', { list: {}, loading: true })

        const { data, status } = await api('get', '/education/get-education')

        await commit('setStateData', { list: data, loading: false })
    }

}

export const getters = {
    getState: state => stateKey => {
        return state[stateKey]
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
