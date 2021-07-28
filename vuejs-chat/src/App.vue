<template>
  <div id="app">
    <Header/>
      <button v-on:click="sendMessage">send</button>
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
      data: [
        {
          name: 'david',
          message: 'hello'
        }
      ]
    }
  },
  methods: {
    sendMessage:function () {
      this.connection.send(JSON.stringify(this.data))
    }

  },
  created:function () {

  },
  mounted:function () {
    this.connection = new WebSocket(`ws://skade.cc:38080`);
    this.connection.onopen = function (){
      console.log('connected')
    }
    this.connection.addEventListener('message',function (event){
      alert(event.data)
    })
    this.connection.onerror = function (error) {
      alert(error.data)
    }
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
