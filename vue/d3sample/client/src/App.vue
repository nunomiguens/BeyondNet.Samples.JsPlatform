<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <FormHandler/> -->
      <FormConverter/>
    </v-content>
  </v-app>
</template>

<script>

import FormHandler from './components/formhandler'
import FormConverter from './components/formconverter'

export default {
  name: 'App',
  components: {
    // FormHandler
    FormConverter
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.viewport.treeclass.tree > svg {
  height: 100%;
  width: 100%;
}
</style>
