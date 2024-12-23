<template>
  <v-container>

    <SectionSummary 
      :loadData = "async () => { return await orchestrator.command('Summary', 'loadData', {}); }"
      :key = "updateKeySectionSummary"
      class="pa-0 ma-0"
    />

    <SectionJobContents
      :orchestrator = "orchestrator"
      :callUpdateSummary = "callUpdateSummary"
      class="pa-0 ma-0"
    />

  </v-container>
</template>

<script setup>
import SectionSummary from './SectionSummary.vue';
import SectionJobContents from './SectionJobContents/SectionJobContents.vue';

import { ref, onMounted } from 'vue';

import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';


const orchestrator = TaskOrchestratorConfig();

const updateKeySectionSummary = ref(0);
const callUpdateSummary = () => {
  updateKeySectionSummary.value += 1;
}

onMounted(async () => {
  console.log("onMounted: MainPage");
});
</script>

<style scoped>

</style>