<template>
  <div class="desktop">
    <cards>
        <template v-slot:left-nav-bar>
            <left-nav-bar></left-nav-bar>
        </template>
    </cards>
    
    
  </div>
</template>

<script>
import LeftNavBar from "@/components/LeftNavBar.vue";
import Cards from '@/components/Cards.vue';
export default {
  props: {},
  components: { LeftNavBar, Cards},
};
</script>

<style scoped></style>
