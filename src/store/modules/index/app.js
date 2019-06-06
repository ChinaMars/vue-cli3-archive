import * as type from './mutation-types'

const app = {
  namespaced: true,
  state: {
    direction: '',
    isMenu: true,
    isBaseApi: false
  },
  mutations: {
    [type.SET_DIRECTION] (state, payload) {
      state.direction = payload.direction
    },
    [type.IS_MENU] (state, payload) {
      state.isMenu = payload.isMenu
    },
    [type.IS_BASE_API] (state, payload) {
      console.log(payload)
      state.isBaseApi = payload.isBaseApi
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