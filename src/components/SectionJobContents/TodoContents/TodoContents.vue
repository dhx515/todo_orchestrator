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
                            icon="mdi-cancel"
                            color="red" 
                            class="square-btn" 
                            @click="cancelTask(item)"
                        />
                        <v-btn 
                            icon="mdi-check"
                            color="green" 
                            class="square-btn" 
                            @click="deleteTask(item)"
                        />
                    </div>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>

    <AddTodoModal
        v-model="isModalOpen"
        :isDialogOpen = "isModalOpen"
        :closeDialog = "closeModal"
        :addTask = "addTask"
    />
</v-container>
</template>

<script setup>
import AddTodoModal from './AddTodoModal.vue';

import { ref, onMounted } from 'vue';


const props = defineProps(['loadData', 'createLoad', 'cancelLoad', 'doneLoad']);

const todoItems = ref([]);

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
}

const addTask = async (task) => {
    todoItems.value = await props.createLoad(task);
};
const cancelTask = async (item) => {
    todoItems.value = await props.cancelLoad(item);
};
const deleteTask = async (item) => {
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

.custom-btn {
    width: 24px;  /* 버튼의 너비 */
    height: 24px; /* 버튼의 높이 */
    padding: 0;   /* 내부 여백 제거 */
    margin: 0;    /* 외부 여백 제거 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.square-btn {
  height: 48px; /* 원하는 크기로 설정 */
  width: 48px;  /* 정사각형이 되도록 높이와 동일하게 설정 */
  min-width: 48px; /* Vuetify 버튼 기본 최소 너비 덮어쓰기 */
  padding: 0; /* 내부 여백 제거 */
  border-radius: 4px; /* 선택적으로 모서리를 둥글게 */
}
</style>