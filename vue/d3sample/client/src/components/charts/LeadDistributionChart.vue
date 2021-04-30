<template>  
    <v-layout row>
        <v-card style="width: 100%; height: 100%">
          <tree ref="tree"  
            :data="data"
            :identifier="getId" 
            :zoomable="zoomable" 
            :node-text="nodeText"  
            :margin-x="Marginx" 
            :margin-y="Marginy" 
            :radius="radius" 
            :type="type" 
            :layout-type="layoutType"
            :duration="duration" 
            class="tree"></tree>              
        
      </v-card>
  </v-layout>
</template>

<script>  

import {tree} from 'vued3tree'

export default {
    name: 'LeadDistributionChart',
    props:{
      title:String,
      data: Object
    },
    components: {
      tree
    },
    data () {
      return {
            dialog: false,
            type: 'tree',
            layoutType: 'euclidean', 
            duration: 750,
            Marginx: 30,
            Marginy: 30,
            radius: 5,
            nodeText: 'name',
            currentNode: null,
            zoomable: true,
            isLoading: false,
            isUnderGremlinsAttack: false,
            events: []           
      }      
  },
  methods: {
    getId (node) {
      return node.id
    }
  }
}
</script>

<style scoped>

.tree {
  height: 800px;
  width: 100%;
  font-size: 35px
}

.graph-root {
  height: 800px;
  width: 100%;
}

</style>
