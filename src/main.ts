import { routes } from './config/routers';
import { createApp } from 'vue'
import { App } from './App'
import { createRouter } from 'vue-router'
import { history } from './utils/history';


const router = createRouter({ history, routes })

const app = createApp(App)
app.use(router)
app.mount('#app')
