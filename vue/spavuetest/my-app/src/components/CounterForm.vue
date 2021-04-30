<template>
  <v-container>
      <span class="count">{{ count }}</span>
      <v-btn color="info" @click="increment" data-name='txtIncrement'>Increment</v-btn>
  </v-container>
</template>

<script>
export default {
 name:'CounterForm',
 data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style>

</style>
