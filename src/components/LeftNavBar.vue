<template>
<div id="app">
  <v-app>
      <v-navigation-drawer absolute permanent color="#0c365a">
        <v-list-item color="white" class="white--text">
          <v-list-item-content >
            <v-list-item-title >
              Aspire
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
          class="side-list"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            class="white--text"
            :to="item.to"      
          >
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-app>
</div>
</template>







<script>
import Vue from 'vue'
export default Vue.extend({
name: "desktop",
  props: {},
  data: () => {
      return {
      items: [
        { title: 'Home', icon: 'mdi-home' , to:'/desktop'},
        { title: 'Cards', icon: 'mdi-credit-card', to:'/desktop'},
        { title: 'Payments', icon: 'mdi-help-box', to:'/desktop'},
        { title: 'Credit', icon: 'mdi-arrow-up-circle', to:'/desktop'},
        { title: 'Settings', icon: 'mdi-account', to:'/desktop'},
      ],
      right: null,
    }
  }, 
});
</script>


<style scoped>
.sidebar {
  color: white;
  font-size: 2em;
  background-color: #0c365a;;
  z-index: 1;
  float: left;
  top: 10%;
  margin: auto;
  bottom: 10%;
  width: 40%;
}
.each-section{
    min-height: 2em;
    
}
</style>
