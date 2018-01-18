<template>
  <div class="container">
    <div class="loading" v-if="!loaded">
      <vue-loading spinner="circles"></vue-loading>
    </div>
    <div v-else>
      <div v-if="!gameStarted" class="before-game">
        <story :storyText="`Once upon a time, there lived knight ${ knight.name }. He wanted to go and save a beautiful princess and he knew that the princess is protected by dragons, who are trained by Mailis, who was the best dragon trainer in the whole wide world. He still wanted to go and save the princess. So his journey begins.`"></story>
        <help v-if="storyEnd"></help>
      </div>
      <div v-else>
        <storm v-if="weather.code === 'SRO'"></storm>
        <fog v-if="weather.code === 'FUNDEFINEDG'"></fog>
        <long-dry v-if="weather.code === 'T E'"></long-dry>
        <flood v-if="weather.code === 'HVA'"></flood>
      </div>
      <knight></knight>
      <dragon v-if="weather.code !== 'SRO'" :class="{ stand, fight }"></dragon>
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

import bgSound from './../assets/sound/bg-sounds.mp3'
import roar from './../assets/sound/roar.mp3'

export default {
  name: 'battle',
  data () {
    return {
      errors: [],
      stand: true,
      fight: false,
      audio: new Audio(bgSound),
      roar: new Audio(roar)
    }
  },
  computed: {
    ...mapState(['knight', 'loaded', 'weather', 'gameStarted', 'storyEnd', 'knightAlive'])
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
    this.audio.loop = true
    this.audio.play()
  },
  methods: {
    ...mapActions(['getData', 'startGame']),
    gameActions () {
      window.addEventListener('keydown', (event) => {
        var left = parseInt(document.getElementById('knight').style.left)
        if (left < 600) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            !this.gameStarted && this.startGame()
          }
        } else {
          this.stand = false
          this.fight = true
          this.roar.play()
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
    overflow: hidden;
    border: 10px solid #000;
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
    position: absolute!important; /* Rewriting vue-loader component :( */
    width: 60px;
    height: 60px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
