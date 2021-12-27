<template>
  <v-app class="desktop-container">
    <slot name="left-nav-bar"></slot>
    <v-card  class="cards">
        <v-app-bar id="balance">
            <v-col>
        <v-row>Available Balance</v-row>
          <v-row id="icon">
              <v-icon color="#01d167">mdi-currency-usd</v-icon>
              3000
            </v-row>
            </v-col>
      <v-btn
            color="primary"
            absolute
            dark
            right
            @click="dialog=true"
          >
          <v-icon color="white">mdi-plus</v-icon>
            New card
            
          </v-btn> 
         <add-card :dialog="dialog" :style="style" @handleChange="handleChange"></add-card> 
    </v-app-bar>
    
        <v-row>
            <v-col cols=6>
           <v-spacer></v-spacer>
           <v-spacer></v-spacer>
          <v-container>
        <v-card
        min-height= "300"
        width= "100%"
        top= 10
        class="white--text">
        <v-card-title ><v-carousel 
    class="cards-car"
    v-model="model" 
    height=300>
      <v-carousel-item
        v-for="item in items"
        :key="item.id"
        class="each-carousel"
      >
        <v-sheet
          :color="item.color"
          height="100%"
          tile
        >
        <v-col>
          <v-row
            class="white--text"
            align= "center"
          >
          <v-col>
            <div class="text-h4">
              {{item.Name}}
            </div>
            </v-col>
          </v-row>
          <v-row
            class="white--text"
            align= "center"
          >
          <v-col>
            <div class="text-h6">
              **** **** **** {{item.CardNo}}
            </div>
            </v-col>
          </v-row>
          
          <v-row
            class="white--text"
            align= "center"
          >
            <v-col >
              <div class="text-h6">
              Thru: {{item.Expiry}}
            </div>
            </v-col>
            <v-col >
              <div class="text-h6">
              CVV: ***
            </div>
            </v-col>
          </v-row>
          
        </v-col>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</v-card-title>
        </v-card> 
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <edit-card class="mobile-edit" :freeze="freeze" @handleFreez="handleFreeze" @handleDeleteCard="deleteCard"></edit-card>
        </v-container>
        </v-col>    
    <v-col cols=6>
        <v-spacer></v-spacer>
           <v-spacer></v-spacer>
          <v-container>
    <collapse></collapse>
    </v-container> 
    </v-col> 
    </v-row>
    </v-card>
  </v-app>
  
</template>

<script>
import Vue from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import Collapse from "./Collapse.vue";
import AddCard from "./AddCard.vue";
import EditCard from "./EditCard.vue";
export default Vue.extend({
  components: {
    Collapse,
   AddCard,
    EditCard
  },
  data :()=> {
      return{
    freeze:'Freeze',
    items: [{
    index:0,
    Name: 'Mark Henry',
    CardNo: '2010',
    Expiry: '12/20',
    color: '#01d167'
  },
  {
    index:1,
    Name: 'Burton Guster',
    CardNo: '6784',
    Expiry:'09/23',
    color: '#01d167'
  },
  {
    index:2,
    Name: 'Shawn Spencer',
    CardNo: '1996',
    Expiry:'04/30',
    color: '#01d167'
  }
    ],
    dialog: false,
    style: "{}"
    }
  },
  props:{
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive };
  },
  methods:{
    handleChange(change) {
    this.dialog = false;
      console.log(change);
      if(change.cardName !== ''){
        Vue.set(this.items, this.items.length, {
          index: this.items.length,
          Name: change.cardName,
          CardNo: change.cardNo ? change.cardNo: Math.floor(1000 + Math.random() * 9000),
          Expiry: change.expiry ? change.expiry: '06/12',
          color: '#01d167'
        });        
      }
      console.log(this.items);
      
      },
      deleteCard() {
        console.log('delete');
        this.items.splice(this.model,1);
      },
  handleFreeze() {
    console.log('freeze');
    this.items[this.model].color = this.items[this.model].color=='#808080'?'#01d167':'#808080';
    console.log(this.model);
    this.freeze= this.freeze==='Freeze'?'Unfreeze':'Freeze';
  }
}
});
</script>

<style scoped>

.desktop-container {
  display: flex;
  flex-direction: column;
  height:100%;
  margin-top: 0%;
}
#icon {
  font-weight: bold;
  color: black;
  font-size: 2 em;
}
.edit-card {
    align-content: stretch;
    place-content: center; 
    top: 5%
}
.edit-card-button{
    text-transform: none !important;
    font-size: x-small;
    white-space: normal !important; 
    color: #283593;
    background-color: transparent !important;
    
}
.cards {
  display: flex;
  flex-direction: column;
  width: 75%;
  float: right;
  right: 10%;
  position: absolute;
  font-weight: 10%;
  font-size: 1.5em;
}
</style>
