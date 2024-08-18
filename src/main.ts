import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import i18n from './i18n';
import './assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');



