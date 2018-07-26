<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <br>
      <li>
        <button v-on:click="reverseMessage">Перевернуть сообщение</button>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
    Mikele
      </li>
      <li>
    Ilyash
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Привет, Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
