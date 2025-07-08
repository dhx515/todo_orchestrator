<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-card outlined class="pa-4">
            <v-row justify="space-around">
                <v-col cols="4" class="text-center">
                    <h3>Todo</h3>
                    <p>{{ summaryState['Todo'] }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h3>Done</h3>
                    <p>{{ summaryState['Done'] }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h3>Canceled</h3>
                    <p>{{ summaryState['Cancel'] }}</p>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { inject, onMounted } from 'vue';


const orchestrator = inject('orchestrator');
const summaryState = inject('summaryState');

onMounted(async () => {
    console.log("onMounted: SectionSummary");

    await orchestrator.command('Summary', 'loadData', {});
});
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>