<template>
  <div>
    <div class="story">
      
    </div>
  </div>
</template>
<script>
  import TypeWriting from 'typewriting'/* eslint-disable */
  // import typewriter from 'vue-type-writer'

  export default {
    name: 'story',
    mounted () {
      const typeWriting = new TypeWriting({
        targetElement: document.getElementsByClassName('story')[0],
        inputString: ' ',
        typingInterval: 300,
        blinkInterval: '10s',
        cursorColor: 'transparent'
      }, () => console.log('END'))
      typeWriting.rewrite('<h1>Once upon a time there lived a beautiful princess and a knigt (name).</h1>', () => {
        console.log('Rewrite() is finished');
      });
    }
  }
</script>
<style lang="scss" scoped>
  h1 {
    position: absolute;
    text-align: center;
    color: #fff;
    z-index: 11;
    padding: 30px;
  }
</style>