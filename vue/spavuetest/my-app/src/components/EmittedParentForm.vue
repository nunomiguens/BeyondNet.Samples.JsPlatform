<template>
  <v-container>
    <EmittedChildForm :message="defaultMessage" @custom="onCustom" @on-call="onCustomAlert" />
    <p v-if="emitted">Emitted!</p>
    <p v-if="emitted">{{ defaultMessage }}</p>
    <br>
    <EventsKeyBoardForm/>
  </v-container>  
</template>

<script>
import EmittedChildForm from './EmittedChildForm'
import EventsKeyBoardForm from './EventsKeyboardForm'

  export default {
    name: 'EmittedParentForm',
    components: { EmittedChildForm, EventsKeyBoardForm},
    data() {
      return {
        emitted: false,
        defaultMessage:`I am Ronald Marrou`,
        complementMessage:''        
      }
    },
    methods: {
      onCustom() {
        this.emitted = true
      },
      onCustomAlert(obj) {
        this.defaultMessage = `Changing the message to: ' ${obj.message} - ${this.complementMessage}`
      },
      printValue(){
        console.log('arg')
      }
    }
  }
</script>