<template>
<v-container>
    <v-row>
        <v-col cols="4">
            <TodoContents
                class="pa-0 ma-0"
            />
        </v-col>
        <v-col cols="4">
            <CanceledContents
                class="pa-0 ma-0"
            />
        </v-col>
        <v-col cols="4">
            <DoneContents
                class="pa-0 ma-0"
            />
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import TodoContents from './TodoContents.vue';
import CanceledContents from './CanceledContents.vue';
import DoneContents from './DoneContents.vue';
</script>

<style scoped>

</style>