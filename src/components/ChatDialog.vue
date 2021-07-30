<template>
  <div class="chat-box__messages">
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
    ...mapGetters(['webSocket','messages'])
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