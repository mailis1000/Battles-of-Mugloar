<template>
  <div class="storm"><div class="test"></div></div>
</template>
<script>
  export default {
    name: 'storm'
  }
</script>
<style lang="scss" scoped>
  .storm {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow:hidden;
    background: url('./../../assets/rain.gif') left center;
    .test {
      background-color: red;
      width: 100px;
      height: 100px;
    }
  }
</style>