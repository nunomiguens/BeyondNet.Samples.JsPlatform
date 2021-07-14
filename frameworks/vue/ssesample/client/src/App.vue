<template>
  <v-app>   
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Notifications Demo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <notification-button/>        
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>    
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Notification/>
    </v-content>
    
  </v-app>
</template>

<script>

  import Notification from './components/Notification'
  import sseNotification from './shared/sseNotification.js'
  import { mapActions } from 'vuex';
  
  const notificationButton = () =>
      import ('./components/NotificationButton')

  export default {
    name: 'App',
    components: {
      Notification,
      'notification-button': notificationButton,
    },
    data () {
      return {        
      }
    },   
    mounted(){            
      sseNotification.Start(this);         
            
    },
    methods: {
    ...mapActions(['addNotificationItem']),
    },
  }
</script>
