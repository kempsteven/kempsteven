import api from '../api'

export const state = {
    messageData: {},
    hasSentEmailRequest: false,
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

    async sendEmail({ commit }, payload) {
        await commit(
            'setStateData',
            {
                messageData: {},
                loading: true,
                hasSentEmailRequest: false
            }
        )

        const { data } = await api('post', '/email/send', payload)

        await commit(
            'setStateData',
            {
                messageData: data,
                loading: false,
                hasSentEmailRequest: true
            }
        )
    }

}

export const getters = {
    getMessageData: state => state.messageData,
    getHasSentEmailRequest: state => state.hasSentEmailRequest,
    getLoading: state => state.loading,
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
