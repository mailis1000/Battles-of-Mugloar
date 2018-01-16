<template>
  <div class="container">
    <div class="loading" v-if="!this.loaded">
      <vue-loading spinner="circles"></vue-loading>
    </div>
    <div v-else>
      <div v-if="!this.gameStarted" class="before-game">
        <story><slot>Once upon a time.</slot></story>
        <help v-if="this.storyEnd"></help>
      </div>
      <div v-else>
        <storm v-if="this.weather.code[0] === 'SRO'"></storm>
        <fog v-if="this.weather.code[0] === 'FUNDEFINEDG'"></fog>
        <long-dry v-if="this.weather.code[0] === 'T E'"></long-dry>
        <flood v-if="this.weather.code[0] === 'HVA'"></flood>
      </div>
      <knight></knight>
      <dragon v-if="this.weather.code[0] !== 'SRO'"></dragon>
      <result v-if="!knightAlive"></result>
    </div>
  </div>
</template>

<script>
import VueLoading from 'vue-simple-loading'

import { mapState, mapActions } from 'vuex'

import Knight from './fighters/Knight'
import Dragon from './fighters/Dragon'

import Storm from './weather/Storm'
import Fog from './weather/Fog'
import LongDry from './weather/LongDry'
import Flood from './weather/Flood'

import Story from './Story'
import Help from './Help'
import Result from './Result'

export default {
  name: 'battle',
  data () {
    return {
      errors: []
    }
  },
  computed: {
    ...mapState(['loaded', 'weather', 'gameStarted', 'storyEnd', 'knightAlive'])
  },
  components: {
    VueLoading,
    Knight,
    Dragon,
    Storm,
    Fog,
    LongDry,
    Flood,
    Story,
    Help,
    Result
  },
  created () {
    this.getData()
  },
  mounted () {
    this.gameActions()
  },
  methods: {
    ...mapActions(['getData', 'startGame', 'killKnight']),
    gameActions () {
      window.addEventListener('keydown', (event) => {
        var left = parseInt(document.getElementById('knight').style.left)
        if (left < 800) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            !this.gameStarted && this.startGame()
          }
        } else {
          document.getElementById('dragon').style.animationPlayState = 'running'
        }
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1200px;
    height: 600px;
    background-image: url('./../assets/game-images/bg-normal.jpg');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .loading, .before-game, .result {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .vue-loading-container {
    position: absolute;
    width: 60px;
    height: 60px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media(max-width:1260px) {
    .container {
      width: 800px;
      height: 400px;
    }
  }
</style>
