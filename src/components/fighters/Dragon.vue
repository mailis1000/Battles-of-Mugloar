<template>
  <div id="dragon" style="animation-play-state:paused"/>
</template>
<script>
export default {
  name: 'dragon'
}
</script>
<style lang="scss" scoped>
  #dragon {
    position: absolute;
    right: 0;
    bottom: 40px;
    width: 400px;
    height: 216px;
    background: url('./../../assets/fighters/Dragon.png') left center;
    animation: animDragon 1.5s steps(10) forwards;
  }
  @keyframes animDragon {
    0% { background-position: -8000px; }
  }
</style>
