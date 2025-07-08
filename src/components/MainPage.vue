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
import { ref, onMounted, provide } from 'vue';
import SectionSummary from './SectionSummary.vue';
import SectionJobContents from './SectionJobContents/SectionJobContents.vue';

import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';

const summaryState = ref({});
provide('summaryState', summaryState);

const todoState = ref([]);
provide('todoState', todoState);

const doneState = ref([]);
provide('doneState', doneState);

const cancelState = ref([]);
provide('cancelState', cancelState);

const orchestrator = TaskOrchestratorConfig(todoState, doneState, cancelState, summaryState);
provide('orchestrator', orchestrator);

onMounted(async () => {
  console.log('onMounted: MainPage')
});
</script>

<style scoped></style>
