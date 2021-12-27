<template>
<v-card class="colla" >
    <v-expansion-panels >
      <v-expansion-panel
      class="expand"
        v-for="item in items"
        :key="item.id"
      >
        <v-expansion-panel-header >
            <v-col cols=2>
            <v-icon color="#0c365a" >{{ item.icon }}</v-icon>
            </v-col>
          {{item.title}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> 
</v-card>  
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    data :()=> {
      return {
          items:[
              {
              id:0,
              title: 'Card Details',
              icon: 'mdi-card-bulleted-outline',
              color: '#0c365a'
                },
                {
                    id:1,
              title: 'Recent Transaction',
              icon: 'mdi-swap-horizontal',
              color: '#0c365a'
                } 
          ]
        }
  },

});
</script>

<style>
.colla {
    max-height: 300px !important;
}
.expand {
    color: "#E3F2FD"
}

</style>
