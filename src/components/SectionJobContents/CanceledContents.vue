<template>
<v-container>
    <v-card outlined>
        <v-card-title class="red white--text">Canceled</v-card-title>
        <v-divider/>
        <v-list>
            <v-list-item v-for="(item, index) in canceledItems" :key="index">
                <v-list-item-title>
                    {{ item }}
                    <v-btn color="#F0F0F0" class="square-btn" @click="deleteTask(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps(['loadData', 'deleteLoad']);

const canceledItems = ref([]);

const deleteTask = async(item) => {
    await props.deleteLoad(item);
};

onMounted(async () => {
    console.log("onMounted: CanceledContents");

    canceledItems.value = await props.loadData();
});
</script>

<style scoped>
.red {
    background-color: #d32f2f !important;
}
.square-btn {
  height: 48px; /* 원하는 크기로 설정 */
  width: 48px;  /* 정사각형이 되도록 높이와 동일하게 설정 */
  min-width: 48px; /* Vuetify 버튼 기본 최소 너비 덮어쓰기 */
  padding: 0; /* 내부 여백 제거 */
  border-radius: 4px; /* 선택적으로 모서리를 둥글게 */
}
</style>