<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>ChatEmbed</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding-vertical">
      <ion-grid>
          <ion-row :key="index" v-for="(msg, index) of messages">
            <ion-col size="9">
              <div  text="msg.msgText" style="border:2px solid black"></div>
            </ion-col>
          </ion-row> 
      </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-item>
          <ion-label>Type Something:</ion-label>
          <ion-input v-model="message.msgText" clear-on-edit="true"></ion-input>
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
      },
      messages: [],

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
      this.messages.unshift({...this.message})
      console.log(this.message)
      console.log(this.messages)
      this.message.msgText = "";
      console.log(this.message)
      console.log(this.messages)
    }
  }
});
</script>

<style scoped>
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