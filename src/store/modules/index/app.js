import * as type from './mutation-types'

const app = {
  namespaced: true,
  state: {
    direction: '',
    isMenu: true
  },
  mutations: {
    [type.SET_DIRECTION] (state, payload) {
      state.direction = payload.direction
    },
    [type.IS_MENU] (state, payload) {
      state.isMenu = payload.isMenu
    }
  },
  actions: {
    SetDirection: ({commit}, payload) => {
      commit(type.SET_DIRECTION, payload)
    },
    IsMenu: ({commit}, payload) => {
      commit(type.IS_MENU, payload)
    }
  }
}

export default app