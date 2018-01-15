<template>
  <div>
    <div class="story">
      <h1 id="text">Once upon a time, there lived knight called <slot></slot></h1>
      <h1 id="type"></h1>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'story',
    data () {
      return {
        start: true,
        txtFrom: 0,
        speed: 50,
        txt: ''
      }
    },
    mounted () {
      this.txt = document.getElementById('text').textContent
      if (this.start) {
        this.typeWriter()
      }
    },
    methods: {
      typeWriter () {
        return new Promise((resolve, reject) => {
          if (this.txtFrom < this.txt.length) {
            document.getElementById('type').innerHTML += this.txt.charAt(this.txtFrom)
            this.txtFrom++
            setTimeout(this.typeWriter, this.speed)
          }
        }).then(() => {
          this.start = false
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  h1 {
    text-shadow: 0 0 3px #000;
    color: #fff;
    padding: 30px;
    font-family: "Courier";
  }
  
  #text {
    display: none;
  }
</style>