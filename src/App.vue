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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>