import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css' // Ensure you import the Bootstrap Vue 3 CSS

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css' // Import toast notification styles
import BootstrapVue3 from 'bootstrap-vue-3' // Import BootstrapVue3

const app = createApp(App)

app.use(router)
app.use(useToast())
app.use(BootstrapVue3) // Use BootstrapVue3

app.mount('#app')
