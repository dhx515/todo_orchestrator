<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-card outlined class="pa-4">
            <v-row justify="space-around">
                <v-col cols="4" class="text-center">
                    <h2>Todo</h2>
                    <p>{{ 1 }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h2>Done</h2>
                    <p>{{ 2 }}</p>
                </v-col>
                <v-col cols="4" class="text-center">
                    <h2>Canceled</h2>
                    <p>{{ 3 }}</p>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>

</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>