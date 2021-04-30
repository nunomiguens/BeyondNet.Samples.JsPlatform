<template>
    <v-container>
        <v-btn @click="callEvent()">
            Call Event
        </v-btn>
    </v-container>
</template>

<script>
export default {
    props:["message"],
    methods:{
        callEvent(){
            this.$emit('on-call', { message: this.message })
            this.$emit('custom')
        }
    }
}
</script>

<style>

</style>
