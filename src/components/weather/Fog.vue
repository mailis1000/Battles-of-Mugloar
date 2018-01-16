<template>
  <canvas id="fog"></canvas>
</template>
<script>
export default {
  name: 'fog',
  data () {
    return {
      particles: [],
      particleCount: 30,
      maxVelocity: 2,
      targetFPS: 33,
      canvasWidth: 400,
      canvasHeight: 400,
      image: 'http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png'
    }
  },
  mounted () { // TODO: Convert this as a normal Vue component
    this.createFog()
  },
  methods: {
    createFog () {
      var imageObj = new Image()

      imageObj.onload = () => {
        this.particles.forEach((particle) => {
          particle.setImage(imageObj)
        })
      }

      imageObj.src = this.image

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
      let init = () => {
        var canvas = document.getElementById('fog')
        if (canvas.getContext) {
          context = canvas.getContext('2d')
          for (var i = 0; i < this.particleCount; ++i) {
            var particle = new Particle(context)
            particle.setPosition(generateRandom(0, this.canvasWidth), generateRandom(0, this.canvasHeight))
            particle.setVelocity(generateRandom(-this.maxVelocity, this.maxVelocity), generateRandom(-this.maxVelocity, this.maxVelocity))
            this.particles.push(particle)
          }
        }
      }
      let draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.5)'
        context.fillRect(0, 0, 400, 400)
        this.particles.forEach(function (particle) {
          particle.draw()
        })
      }
      let update = () => {
        this.particles.forEach(function (particle) {
          particle.update()
        })
      }
      init()
      if (context) {
        setInterval(function () {
          update()
          draw()
        }, 3000 / this.targetFPS)
      }
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
