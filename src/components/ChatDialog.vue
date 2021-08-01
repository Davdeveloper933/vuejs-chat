<template>
  <div class="chat-box__messages">
      <div class="websocket-connection__loader" v-if="!getConnectedStatus">
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__dot"></div>
        <div class="websocket-connection__loader__text"></div>
      </div>
    <div class="chat-box__separator">
      12 июля
    </div>
    <div
        :key="index"
        v-for="(message,index) in messages"
    >
      <div class="chat-box__message" :class="{'own':message.from === 'user'}">
      <div class="name" v-if="message.from === 'server'">{{ message.support }}</div>
      <div class="message" v-if="message.from === 'server'">
        Добрый день, {{ message.name }}. <br>
        {{ message.text }}
        <div class="time">{{ message.time }}</div>
        <div class="clear"></div>
      </div>
      <div v-else class="message">
        {{ message.text }}
        <div class="time">{{ message.time }}</div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="clear"></div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ChatDialog",
  data(){
    return {
      response:{}
    }
  },
  methods:{
    ...mapMutations(['createSocket','getCurrentTime','makeHistory']),
  },
  computed:{
    ...mapGetters(['webSocket','messages','getConnectedStatus'])
  },
  created() {
    this.createSocket() // соединение с сокетом
  },
  mounted() {
    let self = this; // то же самое,что и data
    // получение и обработка ответа от сервера
      this.webSocket.onmessage = function (event) {
        self.response = JSON.parse(event.data);
        self.getCurrentTime(self.response);
        self.response.from = 'server';
        self.response.text = 'Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?'
        self.messages.push(self.response); // добавление отправленного сообщения в массив сообщений
        self.makeHistory(self.response); // добавление сообщения в историю сообщений
        console.log('history', self.$store.state.history) // чисто для проверки
      }
  }
}
</script>

<style scoped>
.websocket-connection__loader {
  background: #0d1019;
  height: 20px;
  width: 250px;
  position: absolute;
  top: 122px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
}

.websocket-connection__loader__dot {
  animation-name: loader;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  /*border: 2px solid white;*/
}

.websocket-connection__loader__text {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;
}

.websocket-connection__loader__text:after {
  content: "Connecting";
  font-weight: bold;
  animation-name: loading-text;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.websocket-connection__loader__dot:first-child {
  background-color: #8cc759;
  animation-delay: 0.5s;
}

.websocket-connection__loader__dot:nth-child(2) {
  background-color: #8c6daf;
  animation-delay: 0.4s;
}

.websocket-connection__loader__dot:nth-child(3) {
  background-color: #ef5d74;
  animation-delay: 0.3s;
}

.websocket-connection__loader__dot:nth-child(4) {
  background-color: #f9a74b;
  animation-delay: 0.2s;
}

.websocket-connection__loader__dot:nth-child(5) {
  background-color: #60beeb;
  animation-delay: 0.1s;
}

.websocket-connection__loader__dot:nth-child(6) {
  background-color: #fbef5a;
  animation-delay: 0s;
}

@keyframes loader {
  15% {
    transform: translateX(0)
  }

  45% {
    transform: translateX(230px)
  }

  65% {
    transform: translateX(230px)
  }

  95% {
    transform: translateX(0)
  }
}

@keyframes loading-text {
0% {content: "Connecting"}
25% {content: "Connecting."}
50% {content: "Connecting.."}
75% {content: "Connecting..."}
}


.chat-box__message {
  width: 88%;
  margin-bottom: 50px;
  margin-top: -16px;
}

.chat-box__message .time {
  float: right;
  margin-right: -5px;
  margin-left: 15px;
  opacity: 0.5;
}

.chat-box__message.own {
  margin-top: 0;
  float: right;
}

.chat-box__message.own .name {
  display: none;
}

.chat-box__message.own .message {
  color: #fff;
  background: #242279;
  background: linear-gradient(90deg, #242279 0%, #1dacec 100%);
}

.chat-box__message .message {
  background: #fff;
  color: #000;
  padding: 24px;
  border-radius: 10px;
}

.chat-box__message {
  width: 88%;
  margin-bottom: 50px;
  margin-top: -16px;
}
.chat-box__message .name {
  font-size: 0.95rem;
  opacity: 0.5;
  white-space: nowrap;
  margin-bottom: 8px;
}

.chat-box__message .message {
  background: #fff;
  color: #000;
  padding: 24px;
  border-radius: 10px;
}

/*
*/
.chat-box__message .time {
  float: right;
  margin-right: -5px;
  margin-left: 15px;
  opacity: 0.5;
}
</style>