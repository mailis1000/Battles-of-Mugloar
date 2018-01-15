import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gameStarted: false,
    storyEnd: false
  },
  actions: {
    startGame: ({commit}) => (commit('START_GAME', true)),
    endStory: ({commit}) => (commit('END_STORY', true))
  },
  mutations: {
    START_GAME: (state, payload) => (state.gameStarted = payload),
    END_STORY: (state, payload) => (state.storyEnd = payload)
  }
})

export default store
