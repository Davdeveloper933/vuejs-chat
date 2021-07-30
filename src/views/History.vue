<template>
  <div class="custom-page">
    <div class="custom-page__bg message-page__bg"></div>
      <div class="container medium">
        <div class="chat-box">
          <div class="chat-box__header">
            <a href="#" class="back"><i class="icon icon-left"></i></a>
            <h1 class="main-title">Здесь будет отображаться история вашей переписки</h1>
            <div style="width: 12px;" class=""></div>
          </div>
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
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "History",
  data() {
    return {
      messages:[]
    }
  },
  created() {
    // получение истории сообщений из хранилища
    this.messages = JSON.parse(localStorage.getItem('history'));
    console.log(this.messages)
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