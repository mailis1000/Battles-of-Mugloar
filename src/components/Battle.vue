<template>
  <div>
    <div>{{ gameData }}</div>
    <div id="knight" style="left:40px; animation-play-state:paused" :class="{ left: toLeft }"/>
    <div id="dragon" style="animation-play-state:paused"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Battle',
  data () {
    return {
      gameData: {},
      errors: [],
      toLeft: false
    }
  },
  created () {
    axios.get(`http://localhost:5000/`)
    .then(response => {
      this.gameData = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  mounted: function () {
    window.addEventListener('keydown', (event) => {
      var element = document.getElementById('knight')
      var left = parseInt(element.style.left)
      if (left < 800) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          element.style.animationPlayState = 'running'
          document.addEventListener('keyup', function () {
            element.style.animationPlayState = 'paused'
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
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#knight {
  position: absolute;
  width: 100px;
  height: 109px;
  bottom: 40px;
  background: url('./../assets/fighters/Knight3.png') left center;
  animation: animKnight 1.0s steps(10) infinite;
}
#dragon {
  position: absolute;
  right: 0;
  bottom: 40px;
  width: 400px;
  height: 216px;
  background: url('./../assets/fighters/Dragon2.png') left center;
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
