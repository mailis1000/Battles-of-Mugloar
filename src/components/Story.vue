<template>
  <div>
    <div class="story">
      <h1 id="text"><slot></slot></h1>
      <h1 id="typeText"></h1>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'story',
    data () {
      return {
        txtFrom: 0,
        speed: 100,
        txt: ''
      }
    },
    computed: {
      ...mapState(['gameStarted', 'storyEnd'])
    },
    mounted () {
      this.txt = document.getElementById('text').textContent
      if (!this.storyEnd) {
        this.typeWriter().then(() => {
          this.endStory()
          console.log('yay')
        })
      }
    },
    methods: {
      ...mapActions(['endStory']),
      typeWriter () {
        return new Promise((resolve, reject) => {
          document.getElementById('typeText').innerHTML += this.txt.charAt(this.txtFrom)
          this.txtFrom++
          setTimeout(this.typeWriter, this.speed)
          resolve()
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .story {
    position: relative;
    z-index: 3;
    h1 {
      z-index: 12;
      text-shadow: 0 0 3px #000;
      color: #fff;
      padding: 30px;
      font-family: "Courier";
    }

    #text {
      display: none;
    }
  }
</style>