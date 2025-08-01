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
            <v-list-item v-for="(item, index) in taskItems" :key="index" >
                
                <v-list-item-title 
                    class="d-flex justify-space-between align-center rounded-lg pa-2"
                    style="background-color: #f9f9f9;"
                >
                    <div class="d-flex align-center pa-0 ma-0">
                        <v-checkbox v-model="selectedItems" :value="index" class="pa-0 ma-0 d-flex"/>
                        {{ item }}
                    </div>
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
        
        <v-card-actions
            class="d-flex justify-center"
            v-if="selectedItems.length > 0"
        >
            <v-btn
                :color="selectedItems.length < 2? 'gray':'primary'"
                @click="batchRevertTask"
            >
                Revert
            </v-btn>
            <v-btn
                :color="selectedItems.length < 2? 'gray':'black'"
                @click="batchDeleteTask"
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

    <AddTaskModal
        v-model="isModalOpen"
        :domain = "domain"
        :closeDialog = "closeModal"
        :createTask = "createTask"
    />
</v-container>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import AddTaskModal from './AddTaskModal.vue';

const props = defineProps(['domain', 'color']);

const orchestrator = inject('orchestrator');

const domain = props.domain || 'Tasks';
const lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);
const domainStateName = lowerFirst(domain + 'State');
const taskItems = inject(domainStateName);

const selectedItems = ref([]);
const snackbar = ref(false);
const snackbarMessage = ref('');

const isModalOpen = ref(false);
const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;
};

const createTask = async (item) => {
    if (typeof item === 'string' && item.includes(',')) {
        // 쉼표로 구분된 문자열을 배열로 변환하고, 각 항목의 공백을 제거
        const tasks = item.split(',').map(task => task.trim()).filter(task => task.length > 0);
        await orchestrator.command(domain, 'batchCreate', tasks);
    } else {
        // 단일 문자열 또는 다른 타입의 항목은 그대로 사용
        await orchestrator.command(domain, 'singleCreate', tasks);
    }
};

const deleteTask = async (item) => {
    await orchestrator.command(domain, 'singleDelete', item);
    selectedItems.value = [];
};

const batchDeleteTask = async () => {
    if (selectedItems.value.length < 2) {
        snackbarMessage.value = 'You need to select at least 2 items for batch delete.';
        snackbar.value = true;
        return;
    }
    
    const itemsToDelete = selectedItems.value.map(index => taskItems.value[index]);
    await orchestrator.command(domain, 'batchDelete', itemsToDelete);
    selectedItems.value = [];
};

const revertTask = async (item) => {
    await orchestrator.command(domain, 'singleRevert', item);
    selectedItems.value = [];
};

const batchRevertTask = async () => {
    if (selectedItems.value.length < 2) {
        snackbarMessage.value = 'You need to select at least 2 items for batch revert.';
        snackbar.value = true;
        return;
    }
    
    const itemsToRevert = selectedItems.value.map(index => taskItems.value[index]);
    await orchestrator.command(domain, 'batchRevert', itemsToRevert);
    selectedItems.value = [];
};

onMounted(async () => {
    console.log(`onMounted: ${props.domain}Contents`);

    await orchestrator.command(domain, 'loadData', {});
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