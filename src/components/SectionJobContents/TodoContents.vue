<template>
<v-container>
    <v-card outlined>
        <v-card-title class="primary white--text">
            Done
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

.button-group {
    display: flex;
    gap: 8px; /* 버튼 사이 간격 */
}

.square-btn {
  height: 48px; /* 원하는 크기로 설정 */
  width: 48px;  /* 정사각형이 되도록 높이와 동일하게 설정 */
  min-width: 48px; /* Vuetify 버튼 기본 최소 너비 덮어쓰기 */
  padding: 0; /* 내부 여백 제거 */
  border-radius: 4px; /* 선택적으로 모서리를 둥글게 */
}
</style>