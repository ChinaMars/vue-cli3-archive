import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    direction: ''
  },
  mutations: {
    updateDirection(state, payload) {
      state.direction = payload.direction
    }
  }
})