<template>
  <div class="help">
    <p>Use arrow keys to move</p>
    <img src="./../assets/arrow-key.png"/>
    <img src="./../assets/arrow-key.png"/>
  </div>
</template>
<script>
export default {
  name: 'help'
}
</script>
<style lang="scss" scoped>
  .help {
    position: relative;
    z-index: 3;
    p {
      color: #fff;
      text-shadow: 0 0 3px #000;
      font-weight: 600;
    }
    img {
      display: inline-block;
      + img {
        transform: rotate(180deg);
      }
    }
  }
</style>
