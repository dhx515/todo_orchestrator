<template>
<v-container>
    <v-card outlined>
        <v-card-title class="green white--text">Done</v-card-title>
        <v-divider />
        <v-list>
            <v-list-item v-for="item in doneItems" :key="item.id">
                <v-list-item-title>
                    {{ item.name }}
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
let doneItems = [{ id: 1, name: "apple done"}, 
                { id: 2, name: "banana done"},
                { id: 3, name: "orange done"}];

const deleteTask = (item) => {
    console.log(`Done: Delete task: ${item.name}`);
};
</script>

<style scoped>
.green {
    background-color: #388e3c !important;
}
.square-btn {
  height: 48px; /* 원하는 크기로 설정 */
  width: 48px;  /* 정사각형이 되도록 높이와 동일하게 설정 */
  min-width: 48px; /* Vuetify 버튼 기본 최소 너비 덮어쓰기 */
  padding: 0; /* 내부 여백 제거 */
  border-radius: 4px; /* 선택적으로 모서리를 둥글게 */
}
</style>