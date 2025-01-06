<template>
<v-container>
    <v-card outlined>
        <v-card-title :class="[color, 'white--text', 'd-flex', 'justify-space-between', 'align-center']">
            {{ domain }}
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
            <v-list-item v-for="(item, index) in taskItems" :key="index">
                <v-list-item-title 
                    class="d-flex justify-space-between align-center rounded-lg pa-2"
                    style="background-color: #f9f9f9;"
                >
                    {{ item }}
                    <div class="button-group">
                        <v-btn 
                            icon="mdi-arrow-left"
                            color="#1976d2" 
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
    
    <AddTaskModal
        v-model="isModalOpen"
        :domain = "domain"
        :closeDialog = "closeModal"
        :createTask = "createTask"
    />
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AddTaskModal from './AddTaskModal.vue';


const props = defineProps(['domain', 'color', 'loadData', 'createLoad', 'deleteLoad', 'revertLoad']);

const taskItems = ref([]);

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
}

const createTask = async(item) => {
    taskItems.value = await props.createLoad(item);
};

const deleteTask = async(item) => {
    taskItems.value = await props.deleteLoad(item);
};

const revertTask = async(item) => {
    taskItems.value = await props.revertLoad(item);
};

onMounted(async () => {
    console.log(`onMounted: ${props.domain}Contents`);

    taskItems.value = await props.loadData();
});
</script>

<style scoped>
.green {
    background-color: #388e3c !important;
}

.red {
    background-color: #d32f2f !important;
}

.button-group {
    display: flex;
    gap: 8px; /* 버튼 사이 간격 */
}
</style>