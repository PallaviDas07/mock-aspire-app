<template>
  <div class="mobile">
    <cards></cards>
  </div>
</template>

<script>
import Cards from '@/components/CardsMobile.vue';
import Vue from 'vue';
export default Vue.extend({
components:{
  Cards
}
});
</script>

<style lang="scss" scoped>
.mobile {
  // max-width: 40%;
  // max-height: 60%;
  // top: 10%;
  // border-style: solid;
  // margin: auto;
}
</style>
