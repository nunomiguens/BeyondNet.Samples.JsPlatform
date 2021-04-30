<template>  
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>

            <v-toolbar color="light-blue" light>
              <v-btn fab small color="cyan accent-2" 
                    bottom left absolute
                    @click="dialog = true">
                <v-icon>add</v-icon>
              </v-btn>  
            </v-toolbar>

            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                
                <v-list three-line subheader>
                  <v-container fluid>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-combobox v-model="type" :items="types" 
                            label="Select a favorite chart"></v-combobox>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-combobox v-model="layoutType" :items="layoutTypes" 
                            label="Select a layout type"></v-combobox>
                      </v-flex>
                    </v-layout>

                    <v-layout wrap>
                      <v-flex xs12>
                       <v-slider label="margin-x" v-model.number="Marginx" :min="0" :max="200" :thumb-size="23" thumb-label="always">
                       </v-slider>
                      </v-flex>
                    </v-layout>

                    <v-layout wrap>
                      <v-flex xs12>
                       <v-slider label="margin-y" v-model.number="Marginy" :min="0" :max="200" :thumb-size="23" thumb-label="always">
                       </v-slider>
                      </v-flex>
                    </v-layout>

                     <v-layout wrap>
                      <v-flex xs12>
                       <v-slider label="radius" v-model.number="radius" :min="1" :max="10" :thumb-size="23" thumb-label="always">
                       </v-slider>
                      </v-flex>
                    </v-layout>

                    <v-layout wrap>
                      <v-flex xs12>
                       <v-slider label="duration" v-model.number="duration" :min="0" :max="3000" :thumb-size="23" thumb-label="always">
                       </v-slider>
                      </v-flex>
                    </v-layout>

                    <v-layout wrap>
                      <v-flex xs12>
                        <v-switch v-model="zoomable"
                                  :label="`Zoomable: ${zoomable.toString()}`">
                        </v-switch>
                      </v-flex>
                    </v-layout>            

                  </v-container>
                </v-list>          

                <v-divider></v-divider>  

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

        </v-card>

          <v-layout wrap>
            <v-flex xs12>
              <label>Node Selected: {{ this.currentNode }}</label>
            </v-flex>
          </v-layout>

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
    </v-flex>
  </v-layout>
</template>

<script>  

import {tree} from 'vued3tree'
import gremlins from 'gremlins.js/src/main'

export default {
    props:['title','data'],
    components: {
      tree
    },
    data () {
      return {
            dialog: false,
            type: 'tree',
            types: [ 'tree', 'cluster'],
            layoutType: 'euclidean', 
            layoutTypes:['euclidean','circular'],
            duration: 750,
            Marginx: 30,
            Marginy: 30,
            radius: 3,
            nodeText: 'name',
            currentNode: null,
            zoomable: true,
            isLoading: false,
            isUnderGremlinsAttack: false,
            events: []           
      }      
  },
  methods: {
    do (action) {
      if (this.currentNode) {
        this.isLoading = true
        this.$refs['tree'][action](this.currentNode).then(() => { this.isLoading = false })
      }
    },
    getId (node) {
      return node.id
    },
    expandAll () {
      this.do('expandAll')
    },
    collapseAll () {
      this.do('collapseAll')
    },
    showOnly () {
      this.do('showOnly')
    },
    show () {
      this.do('show')
    },
    onClick (evt) {
      this.currentNode = evt.element
      this.onEvent('onClick', evt)
    },
    onExpand (evt) {
      this.onEvent('onExpand', evt)
    },
    onRetract (evt) {
      this.onEvent('onRetract', evt)
    },
    onEvent (eventName, data) {
      this.events.push({eventName, data: data.data})
    },
    resetZoom () {
      if (!this.$refs['tree']) {
        return
      }
      this.isLoading = true
      this.$refs['tree'].resetZoom().then(() => { this.isLoading = false })
    },

     gremlins () {
      if (this.isUnderGremlinsAttack) {
        this.horde.stop()
        return
      }

      this.duration = 20
      const changeLayout = () => { this.type = (this.type === 'tree') ? 'cluster' : 'tree' }
      const changeType = () => { this.layoutType = (this.layoutType === 'euclidean') ? 'circular' : 'euclidean' }
      const resetZoom = this.resetZoom.bind(this)
      const [treeDiv] = this.$el.getElementsByClassName('tree')
      const [gremlinsButton] = this.$el.getElementsByClassName('btn-danger')
      var horde = getGremlin(gremlinsButton, treeDiv, changeType, changeLayout, resetZoom)
      horde.after(() => { this.isUnderGremlinsAttack = false })
      horde.unleash()
      this.horde = horde
      this.isUnderGremlinsAttack = true
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
