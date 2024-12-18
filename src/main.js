// main.js
import { createApp } from 'vue';
import App from './App.vue';

// Vuetify 설치
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify 스타일
import '@mdi/font/css/materialdesignicons.css'; // MDI 아이콘
import * as components from 'vuetify/components'; // Vuetify 컴포넌트
import * as directives from 'vuetify/directives'; // Vuetify 지시어

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');