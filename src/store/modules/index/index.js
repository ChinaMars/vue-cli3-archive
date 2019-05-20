export default {
  namespaced: true,
  state: {
    direction: ''
  },
  mutations: {
    SET_DIRECTION(state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDirection: ({commit}, payload) => {
      commit('SET_DIRECTION',payload)
    }
  }
}