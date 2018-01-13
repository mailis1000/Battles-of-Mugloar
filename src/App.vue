<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  height: 600px;
  background-image: url('./assets/game-images/bg-normal.jpg');
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

@media(max-width:1260px) {
  #app {
    width: 800px;
    height: 400px;
  }
}
@media(max-width:860px) {
  #app {
    width: 600px;
    height: 350px;
  }
}
</style>