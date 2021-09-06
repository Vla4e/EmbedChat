<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>ChatEmbed</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-grid :key="index" v-for="(msg, index) of messages">
          <ion-row v-if="msg.isMine===true">
            <ion-col class="chatBoxM ion-padding"  size="auto">
              <span> {{msg.msgText}} </span>
            </ion-col>
          </ion-row>
          <ion-row v-else class="ion-justify-content-end">
            <ion-col class="chatBoxO ion-padding" size="auto">
              <span> {{msg.msgText}} </span>
            </ion-col>
          </ion-row> 
      </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-item>
          <ion-label>Type Something:</ion-label>
          <ion-input v-model="message.msgText" v-on:keyup.enter="sendMessage()"></ion-input>
          <ion-button text="Send" @click="sendMessage()"/>
      </ion-item>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRow, IonCol, IonGrid, IonFooter, IonInput, IonLabel, IonItem} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonFooter,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton, 
    IonRow, 
    IonCol, 
    IonGrid,
    IonInput, 
    IonLabel, 
    IonItem
  },
  data(){
    return {

      message:{
        msgText: "",
        timesent: "",
        isMine: false,
      },
      messages: [
          {
          msgText: "Don't talk to me...",
          timesent: "",
          isMine: false,
        },
          {
          msgText: "I thought we were over this.",
          timesent: "",
          isMine: false,
        },
          {
          msgText: "Ok.",
          timesent: "",
          isMine: false,
        }
      ],

      receivedMessages: [],

    }

  },
  methods: {
     getNow() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                    this.message.timesent = time;
    },

    sendMessage(){
      this.getNow();
      this.message.isMine = true;

      this.messages.push({...this.message})

      this.message.msgText = "";
      this.message.isMine = false;
    }
  },
});
</script>

<style scoped>
.gridMargin{
  margin-right: 10px;
}
.chatBoxM {
  white-space: pre-wrap;
  border-radius: 10px;
  background: #6ecd87;
  margin: 5px;
}
.chatBoxO {
  border-radius: 10px;
  background: #fcf953;
  margin: 5px;
  
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>