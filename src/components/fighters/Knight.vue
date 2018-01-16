<template>
  <div id="knight" style="left:40px; animation-play-state:paused" :class="{ left: toLeft }"/>
</template>
<script>
import { mapActions } from 'vuex'

import walking from './../../assets/sound/walking.mp3'

export default {
  name: 'knight',
  data () {
    return {
      toLeft: false,
      audio: new Audio(walking)
    }
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
        if (left < 800) {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            (this.audio.paused || !this.audio.duration < 0) && this.audio.play()
            element.style.animationPlayState = 'running'
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
          this.killKnight()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  #knight {
    position: absolute;
    width: 100px;
    height: 109px;
    bottom: 40px;
    background: url('./../../assets/fighters/Knight.png') left center;
    animation: animKnight 1.0s steps(10) infinite;
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
</style>
