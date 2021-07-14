<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      fullscreen hide-overlay transition="dialog-bottom-transition"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        View Converter
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Converting Json to D3Tree Model Object
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="Deserialize()" >
            Deserialize 
          </v-btn>
        </v-card-actions>

        <LeadDistributionChart :data="this.objectData"/>        

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false" >
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  import LeadDistributionConverter from '../utils/LeadDistributionConverter.js'
  import LeadDistributionChart from './charts/LeadDistributionChart'

  export default {
    components:{
      LeadDistributionConverter,
      LeadDistributionChart
    },
    data () {
      return {
        dialog: false,
        jsonData:'Show JSON Loaded',
        objectData: null
      }
    },
    mounted(){
      this.jsonData = JSON.parse(JSON.stringify(require('../utils/LeadDistributionData.json')));
    },
    methods:{
      Deserialize(){
        this.objectData = LeadDistributionConverter.GetObject(this.jsonData);
      } 
    }
  }
</script>