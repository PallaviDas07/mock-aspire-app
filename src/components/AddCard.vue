<template>
<v-dialog
        v-if="dialog===true"
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Card</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Card Name*"
                    v-model="cardName"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Card Number"
                    v-model="cardNo"
                    type="password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="CVV Number"
                    v-model="cvv"
                    type="password"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="handleClick"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="handleClick"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>         
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:{
        dialog: { type: Boolean, required: true },
    },
    data :()=> {
      return{
      cardName: '',
      cardNo:'',
      cvv:''
      }
    },
    methods:{
    handleClick() {
        this.$emit('handleChange',{
            cardName:this.cardName,
            cardNo:this.cardNo,
            cvv: this.cvv
        });

        }
    }

});
</script>

<style lang="scss" scoped>

</style>
