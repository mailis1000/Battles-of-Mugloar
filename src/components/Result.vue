<template>
  <div class="result">
    <h1>{{ response.message }}</h1>
    <div class="fighters">
      <div class="fighter">
        <h2>Knight</h2>
        <ul>
          <li :key="value" v-for="(value, key) in knight">
              <span>{{ key }}:</span> {{ value }}
          </li>
        </ul>
      </div>
      <div class="fighter">
        <h2>Dragon</h2>
        <ul>
          <li><span>Name:</span> Drogo</li>
          <li :key="value" v-for="(value, key) in dragon">
              <span>{{ key }}:</span> {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'result',
  computed: {
    ...mapState(['response', 'knight', 'dragon'])
  }
}
</script>
<style lang="scss" scoped>
  .result {
    width: auto;
    opacity: 0;
    animation: animResult 4.0s forwards;
    ul {
      list-style: none;
      padding: 0;
      font-size: 16px;
      li span {
        width: 150px;
        display: inline-block;
        text-transform: uppercase;
      }
    }
    ul, h2 {
      text-align: left;
    }
    .fighters {
      padding: 0 120px;
      width: auto;
      height: 100%;
      .fighter {
        width: 50%;
        float: left;
      }
    }
  }
  @keyframes animResult {
    0% { 
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
