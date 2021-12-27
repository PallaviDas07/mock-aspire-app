<template>
  <v-app :style="{background:'#0c365a'}" class="mobile-container">
    <v-card color="#0c365a" class="white--text">
    <v-row class="top-bar">
      <v-col >
      Account Balance
      </v-col>
      <v-col>
        <v-btn
            color="primary"
            absolute
            dark
            right
            @click="dialog = true"
          >
          <v-icon color="white">mdi-plus</v-icon>
            New card
          </v-btn>
          
        </v-col>
    </v-row>
    <v-row class="top-bar">
      <v-col>
        <v-icon color="#01d167">mdi-currency-usd</v-icon>
      3000
      </v-col>
      <v-col></v-col>
    </v-row>
    </v-card>
    <v-carousel 
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
    <edit-card class="mobile-edit" :freeze="freeze" @handleFreez="handleFreeze" @handleDeleteCard="deleteCard"></edit-card>
    <collapse></collapse>
    <v-bottom-navigation class="nav" v-model="value">
      <v-btn value="Home">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn value="Cards">  
        <v-icon>mdi-credit-card</v-icon>
      </v-btn>  
      <v-btn value="Payments">
        <v-icon>mdi-help-box</v-icon>
      </v-btn>
      <v-btn value="Credit">
        <v-icon>mdi-arrow-up-circle</v-icon>
      </v-btn>
      <v-btn value="Settings">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <add-card :dialog="dialog" @handleChange="handleChange"></add-card>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Collapse from './Collapse.vue';
import EditCard from './EditCard.vue';
import AddCard from './AddCard.vue'
export default Vue.extend({
  components:{
    EditCard,
    Collapse,
   AddCard
    },
data: () => { 
  return {
    render: false,
  dialog: false,
  value: 'recent',
  model: 0,
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
  }
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

<style>
.top-bar {
  margin: auto !important;
}
.cards-card{
  margin: 2% 2% 2% 2%;
}
.each-carousel{
  padding: 10px 10px 10px 10px;

}
.mobile-container {
  display: flex;
  flex-direction: column;
  color: #0c365a;
}
.mobile-edit {
  margin-bottom: 0%;

}
.v-btn:not(.v-btn--round).v-size--default[data-v-828a892c] {
    height: 45px;
    min-width: 45px;
    padding: 0 16px;
    margin-right: 0px;

}
</style>
