import { createApp } from 'vue'
import './stylesheets/global.scss'
import 'virtual:uno.css'
import router from './router';
import App from './App.vue'

// 全局组件注册
import globelComponent from '@/components'
console.log('globelComponent',globelComponent)
const app = createApp(App)
app.use(globelComponent)
app.use(router);
app.mount('#app')
