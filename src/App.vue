<template>
  <div id="app">
    <router-view/>
    <!-- <div>{{ count }}</div> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'app'
  // computed: {
  //   ...mapState(['count'])
  // }
}
</script>

<style>
body {
  margin: 0;
  font-size: 16px;
}
#app {
  font-family: "Courier";
  text-shadow: 0 0 3px #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>