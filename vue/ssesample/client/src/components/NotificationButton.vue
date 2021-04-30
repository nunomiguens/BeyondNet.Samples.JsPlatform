<template>
  <v-menu offset-y>
    <v-btn icon slot="activator">
      <v-badge overlap v-model="showNotification" color="green">
        <span slot="badge">{{ notificationPendingReadCount }}</span>        
          <v-icon large>add_alert</v-icon>
      </v-badge>
    </v-btn>

    <v-card> 
        <v-list three-line>
    
          <v-container>

            <v-subheader>
              <h1 :style="showNotification ? 'font-size: 1.4em;':'font-size: 1.1em;'">{{ showTitle }}</h1>
            </v-subheader>

            <template v-for="(item, index) in notificationItems">        
              
              <v-divider :key="index"></v-divider>         

              
              <v-list-tile :key="item.payload.ExecutionDate" 
                           :style="item.read ? 'background-color:white;':'background-color:#ffffe6;'" 
                           @mouseover="updateReadNotificationItem(index)" >

                <v-list-tile-content>                  
                  <v-list-tile-title v-html="formatDate(item.payload.ExecutionDate)"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.payload.Message"></v-list-tile-sub-title>
                </v-list-tile-content>                

                <v-list-tile ripple></v-list-tile>

                <v-list-tile-action>          
                  <v-layout justify-space-around>       
                  <v-icon color="grey" @click="removeNotificationItem(index)">highlight_off</v-icon>
                  <div v-if="item.payload.Hiperlink.length > 0">
                    <v-icon color="grey" @click="openLink(item.payload.Hiperlink)">remove_red_eye</v-icon>
                  </div>
                  </v-layout>                  
                </v-list-tile-action>               

              </v-list-tile>

              <v-divider v-if="index + 1 < notificationItems.length" :key="`divider-${index}`"></v-divider>

            </template>

          </v-container>

        </v-list>
        
      </v-card>
  </v-menu>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
        data () {
          return {         
            }
        },              
        computed: {
          ...mapGetters(['notificationPendingReadCount','notificationItems','notificationItemCount']),
          
          showNotification: function(){ 
            return this.notificationPendingReadCount > 0;             
          },

          showTitle: function() {
            return this.notificationItemCount > 0 ? "Last Notifications":"You do not have any notification yet.";
          },

          showLink(hiperlink){
            return hiperlink.length > 0;
          },

        
        },        
        methods: {
          ...mapActions(['removeNotificationItem','updateReadNotificationItem']),             
          openLink: function(hiperlink){
            window.open(hiperlink,'_blank');
          },
          formatDate: function(date){
            return this.$moment(date).format('MMMM Do YYYY, h:mm:ss a')
          }
        }
    }

</script>

<style scoped>

h2 {
    font-size: 1.3em; /* 40px/16=2.5em */
}

</style>
