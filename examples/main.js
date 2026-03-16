import { createApp } from 'vue'
import App from './App.vue'
import SuperFlow from '../packages/index.vue'

const app = createApp(App)
app.use(SuperFlow)
app.mount('#app')
