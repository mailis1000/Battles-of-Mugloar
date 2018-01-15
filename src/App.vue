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