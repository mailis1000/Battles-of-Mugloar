<template>
  <div class="result">
    <h1>{{ this.response.message }}</h1>
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
  ul {
    list-style: none;
    padding: 0;
    font-size: 16px;
    li span {
      width: 150px;
      display: inline-block;
    }
  }
  ul, h2 {
    text-align: left;
    span {
      text-transform: uppercase;
    }
  }
  .fighter {
    width: 45%;
    float: left;
    padding: 30px;
  }
</style>
