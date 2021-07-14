<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn><router-link to="/Basic"> Basic Form</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn><router-link to="/Counter">Counter Form</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn><router-link to="/Emit">Emit Form</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn><router-link to="/Asyncs">Async Form</router-link></v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>| 
        <span class="mr-1">User: {{ userName }}</span>
      </v-btn>      
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      userName:''
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  created() {
    this.setup();
  },
  methods:{
    ...mapActions(['addUser']),
    setup(){
        this.$store.dispatch('addUser','Ronald Marrou')        
        this.userName = this.$store.getters.getUser
    }
  }
}
</script>
