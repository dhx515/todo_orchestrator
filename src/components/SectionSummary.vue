<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-card outlined class="pa-4">
            <v-row justify="space-around">
                <v-col cols="4" class="text-center">
                    <h3>Todo</h3>
                    <p>{{ tasks['Todo'] }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h3>Done</h3>
                    <p>{{ tasks['Done'] }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h3>Canceled</h3>
                    <p>{{ tasks['Cancel'] }}</p>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps(['loadData']);
const tasks = ref({});

onMounted(async () => {
    console.log("onMounted: SectionSummary");

    tasks.value = await props.loadData();
});
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>