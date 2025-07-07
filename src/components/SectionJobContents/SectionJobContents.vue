<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <TodoContents
                :loadData = "generateLoadData('Todo')"
                :createLoad = "generateCreateLoad('Todo')"
                :batchCreateLoad = "generateCreateLoad('Todo', 'batch')"
                :deleteLoad = "generateDeleteLoad('Todo')"
                :batchDeleteLoad = "generateDeleteLoad('Todo', 'batch')"
                :cancelLoad = "generateTodoCancelLoad()"
                :batchCancelLoad = "generateTodoCancelLoad('batch')"
                :doneLoad =  "generateTodoDoneLoad()"
                :batchDoneLoad = "generateTodoDoneLoad('batch')"
                class="pa-0 ma-0"
                :key = "componentKey['Todo']"
            />
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <TaskContents
                domain = "Done"
                color = "green"
                :loadData = "generateLoadData('Done')"
                :createLoad = "generateCreateLoad('Done')"
                :batchCreateLoad = "generateCreateLoad('Done', 'batch')"
                :deleteLoad = "generateDeleteLoad('Done')"
                :batchDeleteLoad = "generateDeleteLoad('Done', 'batch')"
                :revertLoad = "generateRevertLoad('Done')"
                :batchRevertLoad = "generateRevertLoad('Done', 'batch')"
                class="pa-0 ma-0"
                :key = "componentKey['Done']"
            />
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <TaskContents
                domain = "Canceled"
                color = "red"
                :loadData = "generateLoadData('Cancel')"
                :createLoad = "generateCreateLoad('Cancel')"
                :batchCreateLoad="generateCreateLoad('Cancel', 'batch')"
                :deleteLoad = "generateDeleteLoad('Cancel')"
                :batchDeleteLoad = "generateDeleteLoad('Cancel', 'batch')"
                :revertLoad = "generateRevertLoad('Cancel')"
                :batchRevertLoad = "generateRevertLoad('Cancel', 'batch')"
                class="pa-0 ma-0"
                :key = "componentKey['Cancel']"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import TodoContents from './TodoContents/TodoContents.vue';
import TaskContents from './TaskContents/TaskContents.vue';


const orchestrator = inject('orchestrator');
const componentKey = inject('componentKey');
const updateComponentKey = inject('updateComponentKey');

const generateLoadData = (arg) => {
    return async (param) => {
        return await orchestrator.command(arg, 'loadData', param);
    }
};
const generateCreateLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'CreateLoad', param);
        updateComponentKey('Summary');
        return res;
    }
};
const generateDeleteLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'DeleteLoad', param);
        updateComponentKey('Summary');
        return res;
    }
};
const generateRevertLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'RevertLoad', param);
        updateComponentKey('Summary');
        updateComponentKey('Todo');
        return res;
    }
};
const generateTodoCancelLoad = (type='single') => {
    return async (param) => {
        const res = await orchestrator.command('Todo', type+'CancelLoad', param);
        updateComponentKey('Summary');
        updateComponentKey('Cancel');
        return res;
    }
};
const generateTodoDoneLoad = (type='single') => {
    return async (param) => {
        const res = await orchestrator.command('Todo', type+'DoneLoad', param);
        updateComponentKey('Summary');
        updateComponentKey('Done');
        return res;
    }
};

onMounted(async () => {
    console.log("onMounted: SectionJobContents");
})
</script>

<style scoped></style>
