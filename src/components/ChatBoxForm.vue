<template>
  <form class="chat-box__form main-form" onsubmit="return false">
    <textarea class="input-style" required v-model="textarea" rows="7"></textarea>
    <div class="row">
      <label class="main-form__item file-field">
      </label>
      <div class="main-form__submit">
        <button type="submit" v-on:click="sendMessage" class="radius-button standart rounded">Отправить</button>
      </div>
    </div>
  </form>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
  name: "ChatBoxForm",
  data(){
    return {
      textarea:'',
    }
  },
  methods:{
    ...mapMutations(['createSocket','getCurrentTime','makeHistory','connectedStatus']),
    // отправка сообщения серверу от клиента
    sendMessage() {
      if(this.getConnectedStatus && this.textarea){ // проверка подключения и заполненного поля
        let message = {
          text:this.textarea,
          name:'Давид',
          from:'user',
          time:null,
          support:'Служба поддержки'
        }
        this.getCurrentTime(message) // получение времени в момент оптправки сообщения
        this.webSocket.send(JSON.stringify(message)) // отправка на сервер
        this.messages.push(message);
        this.makeHistory(message);
        this.textarea = null; // очистка поля ввода
        console.log(this.messages)
      }
    }
  },
  computed:{
    ...mapGetters(['webSocket','messages','response','getConnectedStatus'])
  },
  created:function () {
    this.createSocket() // соединение
  },
  mounted() {
    console.log(this.messages)
    this.connectedStatus();
    console.log(this.messages)
  }
}
</script>

<style scoped>
.chat-box__form {
  max-width: 100% !important;
}

.chat-box__form .separator {
  max-width: 280px;
}

.chat-box__form .row {
  display: flex;
  justify-content: space-between;
}

.chat-box__form .main-form__submit {
  margin-top: 0;
}

.chat-box__form textarea {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #9b9b9b;
  margin-bottom: 25px;
}

.chat-box__form textarea:focus {
  border: 2px solid #1ab4ed;
}
</style>