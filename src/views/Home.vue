<template>
  <div class="custom-page">
    <!-- custom-page__bg -->
    <div class="custom-page__bg message-page__bg">
    </div>
    <!-- /custom-page__bg -->
    <!-- container -->
    <div class="container medium">
      <!-- chat-box -->
      <div class="chat-box">
        <!-- chat-box__header -->
        <div class="chat-box__header">
          <a href="#" class="back"><i class="icon icon-left"></i></a>
          <h1 class="main-title">Добро пожаловать в онлаин-чат службы поддержки</h1>
          <div style="width: 12px;" class=""></div>
        </div>
        <!-- /chat-box__header -->
        <!-- chat-box__messages -->
        <ChatDialog/>
        <ChatBoxForm/>
        <!-- /chat-box__form -->
      </div>
      <!-- /chat-box -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
import ChatBoxForm from "../components/ChatBoxForm";
import {mapGetters, mapMutations} from "vuex";
import ChatDialog from "../components/ChatDialog";
export default {
  name: "Home",
  components: {ChatDialog, ChatBoxForm},
  data: function () {
    return {
      //
    }
  },
  methods: {
    ...mapMutations(['createSocket','getCurrentTime']),
  },
  computed:{
    ...mapGetters(['webSocket','messages'])
  },
  created() {
    this.createSocket()
  }
}
</script>

<style scoped>

</style>