import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    weather: {
      message: 'Loading'
    },
    dragon: {},
    knight: {},
    response: {},
    loaded: false,
    gameStarted: false,
    storyEnd: false,
    knightAlive: true
  },
  getters: {
    getWeatherMessage: state => state.weather.message
  },
  actions: {
    getData: ({commit}, payload) => {
      axios.get(`https://obscure-badlands-97816.herokuapp.com/`)
      .then(response => {
        commit('GET_DATA', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    startGame: ({commit}) => (commit('START_GAME', true)),
    endStory: ({commit}) => (commit('END_STORY', true)),
    killKnight: ({commit}) => (commit('KILL_KNIGHT', false))
  },
  mutations: {
    GET_DATA: (state, payload) => {
      state.weather = payload.weather
      state.dragon = payload.fighters.dragon
      state.knight = payload.fighters.knight
      state.response = payload.response
      state.loaded = true
    },
    START_GAME: (state, payload) => (state.gameStarted = payload),
    END_STORY: (state, payload) => (state.storyEnd = payload),
    KILL_KNIGHT: (state, payload) => (state.knightAlive = payload)
  }
})

export default store
