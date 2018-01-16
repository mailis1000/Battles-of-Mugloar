<template>
  <div class="flood">
    <storm :lightning='false'></storm>
    <div class="wave wave-1"></div>
    <div class="wave wave-2"></div>
  </div>
</template>
<script>
import Storm from './Storm'

export default {
  name: 'flood',
  components: {
    Storm
  }
}
</script>
<style lang="scss" scoped>
  .flood{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .flood > .wave{
    background-image: url('./../../assets/ocean-wave.png');
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: contain;
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .wave-1{
    z-index: 2;
    opacity: .4;
    animation: wave 70s linear infinite;
    -webkit-animation: wave 90s linear infinite;
  }
  div.wave-2{
    opacity: .7;
    height: 11%;
    background-position: 3%;
    animation: wave 50s linear infinite;
    -webkit-animation: wave 80s linear infinite reverse;
  }
  @keyframes wave{
    0% {background-position: 0%;}
    100% {background-position: 100%;}
  }
  @-webkit-keyframes wave{
    0% {background-position: 0%;}
    100% {background-position: 100%;}
  }
</style>