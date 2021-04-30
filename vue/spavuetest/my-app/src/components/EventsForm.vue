<template>
  <div>
    <v-btn class="yes" @click="callYes" data-prop='btnYes'>Yes</v-btn>
    <v-btn class="no" @click="callNo" data-prop='btnNo'>No</v-btn>
  </div>
</template>

<script>
export default {
    name: 'YesNoComponent',

    props: {
      callMe: {
        type: Function  
      }
    },

    methods: {
      callYes() {
        this.callMe('yes')
      },
      callNo() {
        this.callMe('no')
      }
    }
  }
</script>


