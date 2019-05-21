import * as type from './mutation-types'

const app = {
  namespaced: true,
  state: {
    direction: ''
  },
  mutations: {
    [type.SET_DIRECTION] (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDirection: ({commit}, payload) => {
      commit(type.SET_DIRECTION,payload)
    }
  }
}

export default app