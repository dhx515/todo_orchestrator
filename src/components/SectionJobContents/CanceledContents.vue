<template>
<v-container>
    <v-card outlined>
        <v-card-title class="red white--text">Canceled</v-card-title>
        <v-divider/>
        <v-list>
            <v-list-item v-for="(item, index) in canceledItems" :key="index">
                <v-list-item-title 
                    class="d-flex justify-space-between align-center rounded-lg pa-2"
                    style="background-color: #f9f9f9;"
                >
                    {{ item }}
                    <div class="button-group">
                        <v-btn 
                            icon="mdi-arrow-left"
                            color="#F0F0F0" 
                            rounded="pill"
                            style="width: 36px; height: 36px;"
                            @click="revertTask(item)"
                        />
                        <v-btn 
                            icon="mdi-delete"
                            color="#F0F0F0" 
                            rounded="pill"
                            style="width: 36px; height: 36px;"
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


const props = defineProps(['loadData', 'deleteLoad', 'revertLoad']);

const canceledItems = ref([]);

const deleteTask = async(item) => {
    canceledItems.value = await props.deleteLoad(item);
};

const revertTask = async(item) => {
    canceledItems.value = await props.revertLoad(item);
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

.button-group {
    display: flex;
    gap: 8px; /* 버튼 사이 간격 */
}
</style>