<template>
    <v-card
        height= "15%"
        color="#E3F2FD"
        class="edit-card">
        <v-btn class="edit-card-button" @click="handleFreeze">
            <v-col cols="12">
            <v-row
            width="100%"
            style="place-content: center; white-space: normal;"
            >
         <v-icon color="#283593">mdi-snowflake</v-icon>
         </v-row><v-row>
         {{freeze}} 
         </v-row>
         <v-row>
            Card
            </v-row>
         </v-col> 
        </v-btn>
        <v-btn class="edit-card-button">
            <v-col cols="12">
            <v-row
            width="100%"
            style="place-content: center; white-space: normal;"
            >
            <v-icon color="#283593">mdi-speedometer</v-icon>
            </v-row>
            <v-row>
            Spend
            </v-row>
            <v-row>
            Limit
            </v-row>
            </v-col> 
        </v-btn>
        <v-btn class="edit-card-button">
            <v-col cols="12">
            <v-row
            width="100%"
            height="100%"
            style="place-content: center; white-space: normal;"
            >
            <v-icon color="#283593">mdi-google</v-icon>
            </v-row><v-row>
                Send to 
            </v-row>
            <v-row>
            Gpay
            </v-row>
            </v-col> 
        </v-btn>
        <v-btn class="edit-card-button">
            <v-col cols="12">
            <v-row
            width="100%"
            style="place-content: center; white-space: normal;"
            >
            <v-icon color="#283593">mdi-reload</v-icon>
            </v-row><v-row>
                Replace
                </v-row>
                <v-row>
                Card
                </v-row> 
            </v-col> 
        </v-btn>
        <v-btn class="edit-card-button" @click="handleDelete">
            <v-col cols="12">
            <v-row
            width="100%"
            style="place-content: center; white-space: normal; "
            >
            <v-icon color="#283593">mdi-delete</v-icon>
            </v-row><v-row>
            Cancel 
            </v-row>
            <v-row>
            Card
            </v-row>
            </v-col> 
        </v-btn>
        </v-card> 
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props:{
        freeze: { type: String, required: true },
    },
    methods:{
        handleFreeze() {
            this.$emit('handleFreez');
        },
        handleDelete() {
            this.$emit('handleDeleteCard');
        },

    }
})
</script>
<style scoped>
.edit-card {
    align-content: stretch;
    place-content: center; 
    margin-top: 0.7em;
    padding-top: 0.5em;
    max-height: 100px !important;
}
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 20vh !important;
    max-width: 100%;
    position: relative;

}
.edit-card-button{
    margin: auto;
    text-transform: none !important;
    font-size: x-small;
    white-space: normal !important; 
    color: #283593;
    background-color: transparent !important;
    border: none;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 50px;
    width: 64px;
    padding: 0 16px;
    margin-right: 5px;

}

</style>
