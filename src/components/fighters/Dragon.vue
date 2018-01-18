<template>
  <div id="dragon"/>
</template>
<script>
export default {
  name: 'dragon'
}
</script>
<style lang="scss" scoped>
  #dragon {
    position: absolute;
    right: 80px;
    bottom: 30px;
    width: 554px;
    height: 245px;
    animation-play-state: running;
    &.stand {
      background: url('./../../assets/fighters/drag-idle.png') left center;
      animation: animDragon .8s steps(6) infinite;
    }
    &.fight {
      background: url('./../../assets/fighters/drag-attack.png') left center;
      animation: animFight 3s steps(56) forwards;
    }
  }
  @keyframes animDragon {
    0% { background-position: -3324px; }
  }
  @keyframes animFight {
    0% { background-position: 31024px; }
  }
</style>
