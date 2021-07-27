<template>
  <div id="app">
    <h2>Vue.js WebSocket Tutorial</h2>
    <button v-on:click="sendMessage(JSON.stringify(data))">Send Message</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      connection: null,
      data:'hello'
    }
  },
  methods: {
    sendMessage: function(message) {
      console.log(this.connection);
      this.connection.send(message);
    }
  },
  created: function() {
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://skade.cc:38080")

    this.connection.onmessage = function(event) {
      console.log(`onmessage = ${event.data}`);
    }

    this.connection.onopen = function(event) {
      console.log(`onopen = ${event.data}`)
      console.log("Successfully connected to the echo websocket server...")
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
