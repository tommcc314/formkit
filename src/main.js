import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
// Create the Vue app instance
const app = createApp(App)

// Use FormKit plugin
app.use(plugin, defaultConfig)

// Mount the app
app.mount('#app')
