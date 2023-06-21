import { createApp } from 'vue'
import router from './05_路由router'
import App from './05_路由router/配置路由不匹配的的页面/NotFound.vue'

createApp(App).use(router).mount('#app')
