import {createApp} from 'vue';
import router from './router';
import App from './App.vue';
import {createPinia} from 'pinia';
import 'virtual:svg-icons-register';
const app = createApp(App)
const pinia = createPinia()
app.use(router).use(pinia).mount('#app');

