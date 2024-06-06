import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ElementPlus)
app.use(ToastService);
app.mount('#app')
