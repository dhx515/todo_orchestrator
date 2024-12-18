<template>
  <v-container>

    <SectionSummary 
      class="pa-0 ma-0"
    />

    <SectionJobContents 
      class="pa-0 ma-0"
    />

  </v-container>
</template>

<script setup>
// import { ref, computed } from "vue";
import SectionSummary from './SectionSummary.vue';
import SectionJobContents from './SectionJobContents/SectionJobContents.vue';

</script>

<style scoped>
.primary {
  background-color: #1976d2 !important;
}
.red {
  background-color: #d32f2f !important;
}
.green {
  background-color: #388e3c !important;
}
</style>