<template>
    <v-dialog max-width="500">
        <v-card>
            <v-card-title class="primary white--text">Add Todo</v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="task"
                    label="Enter a task"
                    outlined
                    dense
                    required
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="close">Cancel</v-btn>
                <v-btn color="green" text @click="save">Add</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, defineProps } from 'vue';


const props = defineProps(['isDialogOpen', 'closeDialog', 'addTask']);

const task = ref('');

const close = () => {
    props.closeDialog();
    task.value = '';
};

const save = async () => {
    if (task.value.trim()) {
        await props.addTask(task.value);
        close();
    }
};
</script>