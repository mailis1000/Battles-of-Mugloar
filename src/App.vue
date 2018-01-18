<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="weather">{{ getWeatherMessage }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['getWeatherMessage'])
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 16px;
}
#app {
  height: 100vh;
  font-family: "Courier";
  text-shadow: 0 0 3px #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.9);
}
img {
  max-width: 800px;
  height: auto;
  padding: 5px;
}
.weather {
  position: absolute;
  bottom: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>