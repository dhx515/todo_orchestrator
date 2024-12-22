import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components/index.mjs';
import * as directives from 'vuetify/lib/directives/index.mjs';

// Vuetify 인스턴스를 전역으로 설정
const vuetify = createVuetify({
    components,
    directives,
});

config.global.plugins = [vuetify];