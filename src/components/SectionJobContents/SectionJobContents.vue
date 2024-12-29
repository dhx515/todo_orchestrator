<template>
<v-container>
    <v-row>
        <v-col cols="4">
            <TodoContents
                :loadData = "todoLoadData"
                :createLoad = "todoCreateLoad"
                :cancelLoad = "todoCancelLoad"
                :doneLoad =  "todoDoneLoad"
                class="pa-0 ma-0"
            />
        </v-col>
        <v-col cols="4">
            <DoneContents
                :loadData = "doneLoadData"
                :deleteLoad = "doneDeleteLoad"
                class="pa-0 ma-0"
                :key = "updateKeySectionDone"
            />
        </v-col>
        <v-col cols="4">
            <CanceledContents
                :loadData = "cancelLoadData"
                :deleteLoad = "cancelDeleteLoad"
                class="pa-0 ma-0"
                :key = "updateKeySectionCancel"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TodoContents from './TodoContents/TodoContents.vue';
import CanceledContents from './CanceledContents.vue';
import DoneContents from './DoneContents.vue';


const props = defineProps(['orchestrator', 'callUpdateSummary']);
const orchestrator = props.orchestrator;

const updateKeySectionCancel = ref(0);
const callUpdateCancel = () => {
    updateKeySectionCancel.value += 1;
}

const updateKeySectionDone = ref(0);
const callUpdateDone = () => {
    updateKeySectionDone.value += 1;
}

const todoLoadData = async () => { 
    return orchestrator.command('Todo', 'loadData', {});
};
const todoCreateLoad = async (param) => {
    const res = await orchestrator.command('Todo', 'createLoad', param);
    props.callUpdateSummary();
    return res;
};
const todoCancelLoad = async (param) => { 
    const res = await orchestrator.command('Todo', 'cancelLoad', param);
    props.callUpdateSummary();
    callUpdateCancel();
    return res;
};
const todoDoneLoad = async (param) => { 
    const res = await orchestrator.command('Todo', 'doneLoad', param);
    props.callUpdateSummary();
    callUpdateDone();
    return res;
};

const doneLoadData = async () => { 
    return orchestrator.command('Done', 'loadData', {});
};
const doneDeleteLoad = async (param) => { 
    const res = await orchestrator.command('Done', 'deleteLoad', param);
    props.callUpdateSummary();
    return res;
};

const cancelLoadData = async () => { 
    return orchestrator.command('Cancel', 'loadData', {});
};
const cancelDeleteLoad = async (param) => { 
    const res = await orchestrator.command('Cancel', 'deleteLoad', param);
    props.callUpdateSummary();
    return res;
};


onMounted(async () => {
    console.log("onMounted: SectionJobContents");
})
</script>

<style scoped></style>
