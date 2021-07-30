<template>
  <div id="app">
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import {mapMutations} from 'vuex';
export default {
  name: 'App',
  components: {Footer, Header},
  methods: {
    ...mapMutations(['createSocket'])
  },
  created:function () {
    this.createSocket()
  }
}
</script>

<style>

</style>
