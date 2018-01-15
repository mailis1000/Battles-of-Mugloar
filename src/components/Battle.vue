<template>
  <div class="container">
    <div class="loading" v-if="!loaded">
      <vue-loading spinner="circles"></vue-loading>
    </div>
    <div v-else>
      <div v-if="!this.gameStarted" class="before-game">
        <story><slot>Once upon a time.</slot></story>
        <help v-if="this.storyEnd"></help>
      </div>
      <storm v-if="gameData.weather.code[0] === 'SRO'"></storm>
      <div id="knight" style="left:40px; animation-play-state:paused" :class="{ left: toLeft }"/>
      <div v-if="gameData.weather.code[0] !== 'SRO'" id="dragon" style="animation-play-state:paused"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueLoading from 'vue-simple-loading'

import { mapState, mapActions } from 'vuex'

import Storm from './weather/Storm'
import Story from './Story'
import Help from './Help'

import walking from '../assets/sound/walking.mp3'

export default {
  name: 'battle',
  data () {
    return {
      loaded: false,
      gameData: {},
      errors: [],
      toLeft: false,
      audio: new Audio(walking)
    }
  },
  computed: {
    ...mapState(['gameStarted', 'storyEnd'])
  },
  components: {
    VueLoading,
    Storm,
    Story,
    Help
  },
  created () {
    axios.get(`https://obscure-badlands-97816.herokuapp.com/`)
    .then(response => {
      this.gameData = response.data
      this.loaded = true
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  mounted () {
    this.move()
    // this.$store.dispatch('startGame')
  },
  methods: {
    ...mapActions(['startGame', 'killKnight']),
    move () {
      window.addEventListener('keydown', (event) => {
        var element = document.getElementById('knight')
        var left = parseInt(element.style.left)
        if (left < 800) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            (this.audio.paused || !this.audio.duration < 0) && this.audio.play()
            element.style.animationPlayState = 'running'
            !this.gameStarted && this.startGame()
            document.addEventListener('keyup', () => {
              element.style.animationPlayState = 'paused'
              this.audio.pause()
            })
          }
          if (event.key === 'ArrowLeft' && left > 30) {
            element.style.left = (element.style.left = left - 3 + 'px')
            this.toLeft = true
          }
          if (event.key === 'ArrowRight') {
            element.style.left = left + 3 + 'px'
            this.toLeft = false
          }
        } else {
          document.getElementById('dragon').style.animationPlayState = 'running'
          this.killKnight()
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.loading, .before-game {
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
#knight {
  position: absolute;
  width: 100px;
  height: 109px;
  bottom: 40px;
  background: url('./../assets/fighters/Knight.png') left center;
  animation: animKnight 1.0s steps(10) infinite;
}
#dragon {
  position: absolute;
  right: 0;
  bottom: 40px;
  width: 400px;
  height: 216px;
  background: url('./../assets/fighters/Dragon.png') left center;
  animation: animDragon 1.5s steps(10) forwards;
}
#knight.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
@keyframes animKnight {
  0% { background-position: -6000px; }
}
@keyframes animDragon {
  0% { background-position: -8000px; }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media(max-width:1260px) {
  .container {
    width: 800px;
    height: 400px;
  }
}
</style>
