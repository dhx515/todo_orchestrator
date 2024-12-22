<template>
<v-container>
    <v-card outlined>
        <v-card-title class="primary white--text">
            Done
        </v-card-title>
        <v-divider/>
        <v-list>
            <v-list-item v-for="(item, index) in todoItems" :key="index">
                {{ item }}
                <v-btn color="red" class="square-btn" @click="cancelTask(item)">
                    <v-icon>mdi-cancel</v-icon>
                </v-btn>
                <v-btn color="green" class="square-btn" @click="deleteTask(item)">
                    <v-icon>mdi-check</v-icon>
                </v-btn>
            </v-list-item>
        </v-list>
    </v-card>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps(['loadData', 'createLoad', 'cancelLoad', 'doneLoad']);

const todoItems = ref([]);

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

.square-btn {
  height: 48px; /* 원하는 크기로 설정 */
  width: 48px;  /* 정사각형이 되도록 높이와 동일하게 설정 */
  min-width: 48px; /* Vuetify 버튼 기본 최소 너비 덮어쓰기 */
  padding: 0; /* 내부 여백 제거 */
  border-radius: 4px; /* 선택적으로 모서리를 둥글게 */
}
</style>