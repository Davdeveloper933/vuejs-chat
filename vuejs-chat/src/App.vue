<template>
  <div id="app">
    <Header/>
      <button v-on:click="sendMessage(JSON.stringify(data))">send</button>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer, Header},
  data: function () {
    return {
      connection: null,
      data:
        {
          name: 'John',
          message: 'hello'
        }
    }
  },
  methods: {
    sendMessage:function (a) {

      this.connection.send(a)
    }
  },
  created:function () {
    this.connection = new WebSocket(`wss://echo.websocket.org`);
  },
  mounted:function () {
    this.connection.addEventListener('open', function () {
      console.log('connected')
    })
    this.connection.onerror = function () {
      alert('error')
    }
    this.connection.addEventListener('message',function (event){
      let data = JSON.parse(event.data)
      alert(`Hello, ${data.name}!`)
      console.log( data.name)
    })
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
