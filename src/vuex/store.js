import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gameStarted: false,
    storyEnd: false,
    knightAlive: true
  },
  actions: {
    startGame: ({commit}) => (commit('START_GAME', true)),
    endStory: ({commit}) => (commit('END_STORY', true)),
    killKnight: ({commit}) => (commit('KILL_KNIGHT', false))
  },
  mutations: {
    START_GAME: (state, payload) => (state.gameStarted = payload),
    END_STORY: (state, payload) => (state.storyEnd = payload),
    KILL_KNIGHT: (state, payload) => (state.knightAlive = payload)
  }
})

export default store
