<template>
  <div>
    <div class="story">
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
        speed: 100
      }
    },
    props: {
      storyText: String
    },
    computed: {
      ...mapState(['gameStarted', 'storyEnd'])
    },
    mounted () {
      !this.storyEnd && this.typeWriter()
    },
    methods: {
      ...mapActions(['endStory']),
      typeWriter () {
        return new Promise((resolve, reject) => {
          if (this.txtFrom < this.storyText.length) {
            document.getElementById('typeText').innerHTML += this.storyText.charAt(this.txtFrom)
            this.txtFrom++
            setTimeout(this.typeWriter, this.speed)
          }
          (this.txtFrom === this.storyText.length) && this.endStory()
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
      padding: 30px;
    }
  }
</style>