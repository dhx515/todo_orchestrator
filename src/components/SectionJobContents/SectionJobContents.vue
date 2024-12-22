<template>
<v-container>
    <v-row>
        <v-col cols="4">
            <TodoContents
                :loadData = "async () => { return orchestrator.command('Todo', 'loadData', {}); }"
                :createLoad =   "async (param) => {
                                    const res = await orchestartor.command('Todo', 'createLoad', param);
                                    callUpdateSummary();
                                    callUpdateTodo();
                                }"
                :cancelLoad =   "async (param) => { 
                                    const res = await orchestartor.command('Todo', 'cancelLoad', param);
                                    callUpdateSummary();
                                    callUpdateCancel();
                                    return res;
                                }"
                :doneLoad =     "async (param) => { 
                                    const res = await orchestartor.command('Todo', 'doneLoad', param);
                                    callUpdateSummary();
                                    callUpdateDone();
                                    return res;
                                }"
                class="pa-0 ma-0"
                :key = "updateKeySectionTodo"
            />
        </v-col>
        <v-col cols="4">
            <DoneContents
                :loadData = "async() => { return await orchestartor.command('Done', 'loadData', {}); }"
                :deleteLoad = " async(param) => { 
                                    await orchestartor.command('Done', 'deleteLoad', param);
                                    callUpdateSummary();
                                    callUpdateDone();
                                }"
                class="pa-0 ma-0"
                :key = "updateKeySectionDone"
            />
        </v-col>
        <v-col cols="4">
            <CanceledContents
                :loadData = "async() => { return await orchestartor.command('Cancel', 'loadData', {}); }"
                :deleteLoad = " async(param) => { 
                                    await orchestartor.command('Cancel', 'deleteLoad', param);
                                    callUpdateSummary();
                                    callUpdateCancel();
                                }"
                class="pa-0 ma-0"
                :key = "updateKeySectionCancel"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import TodoContents from './TodoContents.vue';
import CanceledContents from './CanceledContents.vue';
import DoneContents from './DoneContents.vue';

import { ref, onMounted } from 'vue';


const props = defineProps(['orchestrator', 'callUpdateSummary']);
const orchestartor = props.orchestrator;

const updateKeySectionTodo = ref(0);
const callUpdateTodo = () => {
    updateKeySectionTodo.value += 1;
}

const updateKeySectionCancel = ref(0);
const callUpdateCancel = () => {
    updateKeySectionCancel.value += 1;
}

const updateKeySectionDone = ref(0);
const callUpdateDone = () => {
    updateKeySectionDone.value += 1;
}


onMounted(async () => {
    console.log("onMounted: SectionJobContents");
})
</script>

<style scoped>

</style>