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
                    <div class="d-flex align-center pa-0 ma-0">
                        <v-checkbox v-model="selectedItems" :value="item" class="pa-0 ma-0 d-flex"/>
                        {{ item }}
                    </div>
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

        <v-card-actions
            class="d-flex justify-center"
            v-if="selectedItems.length > 0"
        >
            <v-btn
                :color="selectedItems.length < 2? 'gray':'green'"
                @click="batchDoneTodo"
            >
                Done
            </v-btn>
            <v-btn
                :color="selectedItems.length < 2? 'gray':'error'"
                @click="batchCancelTodo"
            >
                Cancel
            </v-btn>
            <v-btn
                :color="selectedItems.length < 2? 'gray':'black'"
                @click="batchDeleteTodo"
            >
                Delete
            </v-btn>
        </v-card-actions>

    </v-card>

    <v-snackbar v-model="snackbar" :timeout="3000">
        {{ snackbarMessage }}
        <v-btn color="red" text @click="snackbar = false">
            Close
        </v-btn>
    </v-snackbar>

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


const props = defineProps(['loadData'
    , 'createLoad', 'batchCreateLoad'
    , 'deleteLoad', 'batchDeleteLoad'
    , 'cancelLoad', 'batchCancelLoad'
    , 'doneLoad', 'batchDoneLoad']);

const todoItems = ref([]);
const selectedItems = ref([]);
const snackbar = ref(false);
const snackbarMessage = ref('');

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
}

const createTodo = async (target) => {
    if (typeof target === 'string' && target.includes(',')) {
        // 쉼표로 구분된 문자열을 배열로 변환하고, 각 항목의 공백을 제거
        const tasks = target.split(',').map(task => task.trim()).filter(task => task.length > 0);
        todoItems.value = await props.batchCreateLoad(tasks);
    } else {
        // 단일 문자열 또는 다른 타입의 항목은 그대로 사용
        todoItems.value = await props.createLoad(target);
    }
};
const deleteTodo = async (task) => {
    todoItems.value = await props.deleteLoad(task);
};
const batchDeleteTodo = async () => {
    if (checkSelectedItems() === false) return;
    
    todoItems.value = await props.batchDeleteLoad(selectedItems.value);
    selectedItems.value = [];
};
const cancelTodo = async (item) => {
    todoItems.value = await props.cancelLoad(item);
};
const batchCancelTodo = async () => {
    if (checkSelectedItems() === false) return;
    
    todoItems.value = await props.batchCancelLoad(selectedItems.value);
    selectedItems.value = [];
};
const doneTodo = async (item) => {
    todoItems.value = await props.doneLoad(item);
};
const batchDoneTodo = async () => {
    if (checkSelectedItems() === false) return;
    
    todoItems.value = await props.batchDoneLoad(selectedItems.value);
    selectedItems.value = [];
};
const checkSelectedItems = () => {
    if (selectedItems.value.length < 2) {
        snackbarMessage.value = 'You need to select at least 2 items for batch delete.';
        snackbar.value = true;
        return false;
    }
    return true;
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