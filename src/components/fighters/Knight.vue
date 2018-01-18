<template>
  <div 
    id="knight" 
    style="left:40px" 
    :class="{ 
      left: left, 
      stand, 
      walk,
      umbrella: weather.code === 'HVA',
      die: !knightAlive
    }"
  />
</template>
<script>
import { mapState, mapActions } from 'vuex'

import walking from './../../assets/sound/walking.mp3'

export default {
  name: 'knight',
  data () {
    return {
      left: false,
      stand: true,
      walk: false,
      audio: new Audio(walking)
    }
  },
  computed: {
    ...mapState(['knightAlive', 'weather'])
  },
  mounted () {
    this.knightWalk()
  },
  methods: {
    ...mapActions(['killKnight']),
    knightWalk () {
      window.addEventListener('keydown', (event) => {
        var element = document.getElementById('knight')
        var left = parseInt(element.style.left)
        if (left < 600) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            (this.audio.paused || !this.audio.duration < 0) && this.audio.play()
            this.stand = false
            this.walk = true
            document.addEventListener('keyup', () => {
              this.stand = true
              this.walk = false
              this.audio.pause()
            })
          }
          if (event.key === 'ArrowLeft' && left > 30) {
            element.style.left = (element.style.left = left - 3 + 'px')
            this.left = true
          }
          if (event.key === 'ArrowRight') {
            element.style.left = left + 3 + 'px'
            this.left = false
          }
          if (this.weather.code === 'SRO') {
            setTimeout(() => { this.kill() }, 6000)
          }
        } else {
          this.kill()
        }
      })
    },
    kill () {
      this.stand = false
      this.walk = false
      this.killKnight()
    }
  }
}
</script>
<style lang="scss" scoped>
  #knight {
    position: absolute;
    width: 200px;
    bottom: 0;
    animation-play-state: running;
    &.stand, &.walk {
      height: 200.4px;
      animation: animKnight 1.0s steps(10) infinite;
    }
    &.stand {
      background: url('./../../assets/fighters/stand.png') center top;
    }
    &.walk {
      background: url('./../../assets/fighters/walk.png') center top;
    }
    &.die {
      height: 187.2px;
      background: url('./../../assets/fighters/die.png') center top;
      animation: animDeath 1.0s steps(10) forwards;
    }
    &.left {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
    }
    &.umbrella {
      bottom: 70px;
      &:after {
        content: '';
        background: url('./../../assets/weather/umbrella.png');
        display: block;
        width: 350px;
        height: 300px;
        background-position: center bottom;
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -30px;
      }
    }
  }
  @keyframes animKnight {
    0% { background-position: 0 -2004px; }
  }
  @keyframes animDeath {
    100% { background-position: 0 -1872px; }
  }
</style>
