import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index.js'
import i18n from '@/i18n/index.js'
import pinia from './stores'
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')