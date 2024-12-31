<template>
<v-container>
    <v-card outlined>
        <v-card-title class="primary white--text d-flex justify-space-between align-center">
            Todo
            <v-btn 
                icon
                color="#F0F0F0"
                rounded="pill"
                class="d-flex justify-center align-center"
                style="width: 30px; height: 30px;"
                @click="openModal"
            >
                <v-icon size="24">mdi-plus</v-icon>
            </v-btn>
        </v-card-title>
        <v-divider/>
        <v-list>
            <v-list-item v-for="(item, index) in todoItems" :key="index">
                <v-list-item-title 
                    class="d-flex justify-space-between align-center rounded-lg pa-2"
                    style="background-color: #f9f9f9;"
                >
                    {{ item }}
                    <div class="button-group">
                        <v-btn 
                            icon="mdi-check"
                            color="green" 
                            rounded="pill"
                            style="width: 36px; height: 36px;"
                            @click="doneTodo(item)"
                        />
                        <v-btn 
                            icon="mdi-cancel"
                            color="red" 
                            rounded="pill"
                            style="width: 36px; height: 36px;"
                            @click="cancelTodo(item)"
                        />
                        <v-btn 
                            icon="mdi-delete"
                            color="#F0F0F0" 
                            rounded="pill"
                            style="width: 36px; height: 36px;"
                            @click="deleteTodo(item)"
                        />
                    </div>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>

    <AddTodoModal
        v-model="isModalOpen"
        :closeDialog = "closeModal"
        :createTodo = "createTodo"
    />
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AddTodoModal from './AddTodoModal.vue';


const props = defineProps(['loadData', 'createLoad', 'deleteLoad', 'cancelLoad', 'doneLoad']);

const todoItems = ref([]);

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
}

const createTodo = async (task) => {
    todoItems.value = await props.createLoad(task);
};
const deleteTodo = async (task) => {
    todoItems.value = await props.deleteLoad(task);
};
const cancelTodo = async (item) => {
    todoItems.value = await props.cancelLoad(item);
};
const doneTodo = async (item) => {
    todoItems.value = await props.doneLoad(item);
};

onMounted(async () => {
    console.log("onMounted: TodoContents");

    todoItems.value = await props.loadData();
});
</script>

<style scoped>
.primary {
    background-color: #1976d2 !important;
}

.button-group {
    display: flex;
    gap: 8px; /* 버튼 사이 간격 */
}
</style>