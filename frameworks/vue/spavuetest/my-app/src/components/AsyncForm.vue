<template>
    <v-container>
      <v-btn @click="fetchResults" data-prop="btnFetch">Send Async</v-btn>
      <span>{{ value }}</span>
    </v-container>
</template>

<script>
import repository from '../api/Repository'

  export default {
    data() {
      return {
        value: null
      }
    },
    methods: {
      async fetchResults() {
        const response = await repository.get()
        this.value = response.data
      }
    }
  }
</script>

<style>

</style>
