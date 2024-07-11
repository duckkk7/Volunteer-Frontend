import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import { useToast } from 'vue-toast-notification'

const app = createApp(App)

app.use(router)
app.use(useToast())

app.mount('#app')
