<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>ChatEmbed</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-grid :key="index" v-for="(msg, index) of user.userMessages">
          <ion-row :class="{ 'ion-justify-content-end': msg.isMine }">
            <ion-col class="ion-padding" size="auto" :class="{ 'chatBoxM': msg.isMine, 'chatBoxO': !msg.isMine }">
              <span> {{msg.msgText}} </span>
              <br>
              <div :class="{ 'ion-text-right': msg.isMine }"> {{ $filters.formatDate(msg.timesent)}} </div>
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
import api from '@/services/api'

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

  async created() {
    try {
      const userBase = await api.getUserBase()
      this.userBase = JSON.parse(JSON.stringify(userBase))
      this.getChat();
    } catch(e) {
      console.error('pls show err notif')
    }
  },

  data(){
    return {

      message:{
        msgText: "",
        isMine: false,
      },

      user: {
        userId: "",
        userMessages: [],
      },

      userBase: [],
      receivedMessages: [],
    }
  },
  methods: {
    async sendMessage(){
      this.message.isMine = true;
      const sentmsg = await api.sendNewMsg(this.message, this.user.userId)
      this.user.userMessages.push(sentmsg)

      this.message.msgText = "";
      this.message.isMine = false;
    },

    getChat(){
      this.user = this.userBase.find( user => user.userId === this.$route.params.id)
    }
  }
});
</script>

<style scoped>
.chatBoxM {
  white-space: pre-wrap;
  border-radius: 10px;
  background: #367747;
  margin: 5px;
}
.chatBoxO {
  border-radius: 10px;
  background: #8d8c3a;
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