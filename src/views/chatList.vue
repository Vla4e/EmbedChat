<template>
    <ion-page>

        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Chat List</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content fullscreen>
            <ion-list :key="index" v-for="(user, index) of users">
                <ion-item>
                    <ion-avatar>
                        <img :src="user.imgSrc"/>
                    </ion-avatar>
                    <ion-label>
                        <h2 class="previewPadding">{{user.name}}.</h2>
                        <p class="previewPadding">{{user.lastMsg}}</p>
                        <div class="ion-text-right"> {{user.lastMsgDate}} </div>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {
  IonItem, 
  IonList, 
  IonLabel, 
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonAvatar,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem, 
    IonList, 
    IonLabel,
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonAvatar, 
  },
  data(){
      return{
          user: {
              name: "",
              lastMsg: "",
              lastMsgDate: "",
              userId: "",
              imgSrc: ""
          },

          users: [
              {
                  name:"John Doe",
                  lastMsg: "How's it going?",
                  lastMsgDate: "15:32 09-06",
                  userId: "1",
                  imgSrc: "https://scontent.fskp4-2.fna.fbcdn.net/v/t1.6435-9/32423147_10215019330493452_8152434753484619776_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Zyu4CyCa19EAX-7_LDV&_nc_ht=scontent.fskp4-2.fna&oh=6d6354dfb343c2a744571f57c272673e&oe=615B2236"
              },
                {
                  name:"Simono",
                  lastMsg: "Parinjata evegi",
                  lastMsgDate: "11:05 14-09",
                  userId: "2",
                  imgSrc: "https://scontent.fskp4-2.fna.fbcdn.net/v/t1.6435-9/159302403_5575452219139291_682073374859984510_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DDt4RtyB4T4AX9fRDZV&_nc_oc=AQmCcRblvDEZVNu9Hz7HcsKRjWZWCJjxwefZqqFeq25bSARFvcG1dP3mk0JQVorhfP0&_nc_ht=scontent.fskp4-2.fna&oh=ee5846dd3e81c6fa0da7e418b9499690&oe=615D2A8F"
              },
                {
                  name:"Musi",
                  lastMsg: "kafz??",
                  lastMsgDate: "18:49 27-08",
                  userId: "3",
                  imgSrc: "https://scontent.fskp4-1.fna.fbcdn.net/v/t1.6435-9/123245026_3692870344059454_3730946017904286054_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L4X1W1_Y2H8AX-VIgj6&_nc_ht=scontent.fskp4-1.fna&oh=10ef48f4c3fc686a1645cc82b2a126f8&oe=615CE5C2"
              },
          ],
      }
  },
//   methods: {
    
//     setImgSource(user) {
//        user.imgSrc = `../testasset/${this.user.userId}.jpg`
//     },
//   },
});
</script>

<style scoped>
.previewPadding{
    padding-left:5px;
}
</style>