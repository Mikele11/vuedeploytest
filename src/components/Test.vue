<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <br>
      <li>
        <button v-on:click="reverseMessage">Turn the message over</button>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
      <form id="mysend-email" action="/send-email" method="post">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <label for="to">To:</label>
            <input type="email" class="form-control" name="to">
          </div>
        </div>

        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <label for="subject">Subject:</label>
            <input type="text" class="form-control" name="subject">
          </div>
        </div>

        <div class="row">
          <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="body">Body:</label>
              <textarea cols="5" rows="5" class="form-control" name="body"></textarea>
            </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4">
            <button type="submit" class="btn btn-success">Send</button>
          </div>
        </div>
      </form>
      </li>
    </ul>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
var $ = require("jquery");
$('#mysend-email').on('submit', (e) => {
  e.preventDefault();
})

export default {
  name: 'Test',
  data () {
    return {
      msg: 'Hi, Vue.js!'
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
