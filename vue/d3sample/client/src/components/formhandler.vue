<template>
    <LeadDistributionChart :data="this.data"/>   
</template>

<script>

import LeadDistributionChart from './charts/LeadDistributionChart'

export default {
     components: {
      LeadDistributionChart
    },
    data(){
        return {
             data: {
                        name: "person",
                        children:[
                            {
                                name: "Lead 1: AETNA", children:[ {name: "Cuy"}, {name: "PostUp"}]
                            },
                            {
                                name: "Lead 2: HUMANA",
                                children:[ {name: "Cuy"}, {name:"Shared", 
                                                            children:[
                                                                {name: "Lead 3: Moo", children:[
                                                                    {name:"Cuy"}
                                                                ]}           
                                                            ]}]
                            }]
                    }
        }
    }
}
</script>
