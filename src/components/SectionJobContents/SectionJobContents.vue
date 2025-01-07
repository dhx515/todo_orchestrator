<template>
<v-container>
    <v-row>
        <v-col cols="4">
            <TodoContents
                :loadData = "generateLoadData('Todo')"
                :createLoad = "generateCreateLoad('Todo')"
                :deleteLoad = "generateDeleteLoad('Todo')"
                :cancelLoad = "todoCancelLoad"
                :doneLoad =  "todoDoneLoad"
                class="pa-0 ma-0"
                :key = "updateKeySectionTodo"
            />
        </v-col>
        <v-col cols="4">
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
                :key = "updateKeySectionDone"
            />
        </v-col>
        <v-col cols="4">
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
                :key = "updateKeySectionCancel"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TodoContents from './TodoContents/TodoContents.vue';
import TaskContents from './TaskContents/TaskContents.vue';


const props = defineProps(['orchestrator', 'callUpdateSummary']);
const orchestrator = props.orchestrator;

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

const generateLoadData = (arg) => {
    return async (param) => {
        return await orchestrator.command(arg, 'loadData', param);
    }
};
const generateCreateLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'CreateLoad', param);
        props.callUpdateSummary();
        return res;
    }
};
const generateDeleteLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'DeleteLoad', param);
        props.callUpdateSummary();
        return res;
    }
};
const generateRevertLoad = (pipeineName, type='single') => {
    return async (param) => {
        const res = await orchestrator.command(pipeineName, type+'RevertLoad', param);
        props.callUpdateSummary();
        callUpdateTodo();
        return res;
    }
};
const todoCancelLoad = async (param) => { 
    const res = await orchestrator.command('Todo', 'singleCancelLoad', param);
    props.callUpdateSummary();
    callUpdateCancel();
    return res;
};
const todoDoneLoad = async (param) => { 
    const res = await orchestrator.command('Todo', 'singleDoneLoad', param);
    props.callUpdateSummary();
    callUpdateDone();
    return res;
};


onMounted(async () => {
    console.log("onMounted: SectionJobContents");
})
</script>

<style scoped></style>
