<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <TodoContents
                class="pa-0 ma-0"
            />
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <TaskContents
                domain = "Done"
                color = "green"
                class="pa-0 ma-0"
            />
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <TaskContents
                domain = "Cancel"
                color = "red"
                class="pa-0 ma-0"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import TodoContents from './TodoContents/TodoContents.vue';
import TaskContents from './TaskContents/TaskContents.vue';


onMounted(async () => {
    console.log("onMounted: SectionJobContents");
})
</script>

<style scoped></style>
