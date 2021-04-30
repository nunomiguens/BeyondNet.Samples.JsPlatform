<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">VUE-JEST Testing Sample</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/fancyheading">Fancy Heading</router-link>
      <v-spacer></v-spacer>
      <router-link to="/temperature">Temperature</router-link>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
