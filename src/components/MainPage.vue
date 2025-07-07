<template>
<v-container>
  <SectionSummary
    :key="componentKey['Summary']"
    class="pa-0 ma-0"
  />

  <SectionJobContents
    class="pa-0 ma-0"
  />
</v-container>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import SectionSummary from './SectionSummary.vue';
import SectionJobContents from './SectionJobContents/SectionJobContents.vue';

import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';

const summaryState = ref({});
provide('summaryState', summaryState);

const orchestrator = TaskOrchestratorConfig(summaryState);
provide('orchestrator', orchestrator);

const componentKey = ref({
  'Todo': 0,
  'Done': 0,
  'Cancel': 0,
  'Summary': 0
});
provide('componentKey', componentKey);

const updateComponentKey = (target) => {
  componentKey.value[target] += 1;
};
provide('updateComponentKey', updateComponentKey);

onMounted(async () => {
  console.log('onMounted: MainPage')
});
</script>

<style scoped></style>
