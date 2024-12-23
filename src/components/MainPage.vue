<template>
<v-container>
  <SectionSummary
    :loadData = "summaryLoadData"
    :key="updateKeySectionSummary"
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
import { ref, onMounted } from 'vue';
import SectionSummary from './SectionSummary.vue';
import SectionJobContents from './SectionJobContents/SectionJobContents.vue';

import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';


const orchestrator = TaskOrchestratorConfig();

const updateKeySectionSummary = ref(0);
const callUpdateSummary = () => {
  updateKeySectionSummary.value += 1
};

const summaryLoadData = async () => {
  return orchestrator.command('Summary', 'loadData', {});
};

onMounted(async () => {
  console.log('onMounted: MainPage')
});
</script>

<style scoped></style>
