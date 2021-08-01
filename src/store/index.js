import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";

Vue.use(Vuex)
Vue.use(VueRouter)

export default new Vuex.Store({
    state: {
        messages:[], // сообщения,которые передаются/принимаются
        connection:null, // обьект вебсокета
        response:{}, // ответ от сервера
        history:[], // история сообщений
        connected:false
    },
    getters:{
        webSocket:state => state.connection,
        messages:state => state.messages,
        response:state => state.response,
        getConnectedStatus:state => state.connected
    },
    mutations: {
        createSocket(state) { // соединение с сервером
           state.connection = new WebSocket(`wss://echo.websocket.org`);
           // автоматические соединение в случае потери связи
           state.connection.onclose = function(){
                state.connection = null
                setTimeout(this.state.createSocket, 1000)
            }
        },
        connectedStatus(state) {
            state.connection.addEventListener('open',function () {
                state.connected = true; // установка соединения
                console.log(state.connected)
            })
        },
        // создание истории сообщений
        makeHistory(state,message) {
                state.history = JSON.parse(localStorage.getItem('history')) || state.history;
                state.history.push(message);
                localStorage.setItem('history',JSON.stringify(state.history))
        },
        // получение времени в минутах и секундах на момент передачи сообщения
        getCurrentTime(state,message) {
            let date = new Date();
            const dateDetails = {
                hour:date.getHours(),
                min:function () {
                    if(date.getMinutes() < 10) {
                        return `0${date.getMinutes()}`
                    }
                    return date.getMinutes();
                }
            }
            message.time = `${dateDetails.hour}:${dateDetails.min()}`;
        }
    },
    actions:{

    }
})