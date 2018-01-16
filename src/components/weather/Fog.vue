<template>
  <canvas id="fog"></canvas>
</template>
<script>
export default {
  name: 'fog',
  mounted () { // TODO: Convert this as a normal Vue component
    var particles = []

    var particleCount = 30

    var maxVelocity = 2

    var targetFPS = 33

    var canvasWidth = 400
    var canvasHeight = 400

    var imageObj = new Image()

    imageObj.onload = function () {
      particles.forEach(function (particle) {
        particle.setImage(imageObj)
      })
    }

    imageObj.src = 'http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png'

    function Particle (context) {
      this.x = 0
      this.y = 0

      this.xVelocity = 0
      this.yVelocity = 0

      this.radius = 5

      this.context = context

      this.draw = function () {
        if (this.image) {
          this.context.drawImage(this.image, this.x - 128, this.y - 128)
          return
        }
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'rgba(0, 255, 255, 1)'
        this.context.fill()
        this.context.closePath()
      }
      this.update = function () {
        this.x += this.xVelocity
        this.y += this.yVelocity
        if (this.x >= canvasWidth) {
          this.xVelocity = -this.xVelocity
          this.x = canvasWidth
        } else if (this.x <= 0) {
          this.xVelocity = -this.xVelocity
          this.x = 0
        }
        if (this.y >= canvasHeight) {
          this.yVelocity = -this.yVelocity
          this.y = canvasHeight
        } else if (this.y <= 0) {
          this.yVelocity = -this.yVelocity
          this.y = 0
        }
      }
      this.setPosition = function (x, y) {
        this.x = x
        this.y = y
      }
      this.setVelocity = function (x, y) {
        this.xVelocity = x
        this.yVelocity = y
      }
      this.setImage = function (image) {
        this.image = image
      }
    }
    function generateRandom (min, max) {
      return Math.random() * (max - min) + min
    }
    var context
    function init () {
      var canvas = document.getElementById('fog')
      if (canvas.getContext) {
        context = canvas.getContext('2d')
        for (var i = 0; i < particleCount; ++i) {
          var particle = new Particle(context)
          particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight))
          particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity))
          particles.push(particle)
        }
      } else {
        alert('Please use a modern browser')
      }
    }
    function draw () {
      context.fillStyle = 'rgba(0, 0, 0, 0.5)'
      context.fillRect(0, 0, 400, 400)
      particles.forEach(function (particle) {
        particle.draw()
      })
    }
    function update () {
      particles.forEach(function (particle) {
        particle.update()
      })
    }
    init()
    if (context) {
      setInterval(function () {
        update()
        draw()
      }, 3000 / targetFPS)
    }
  }
}
</script>
<style lang="scss" scoped>
  #fog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    opacity: 0.9
  }
</style>
