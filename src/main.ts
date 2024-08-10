import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Context } from '@axm-pack/manage-render'
import '@axm-pack/manage-render/dist/style.css'

createApp(App).use(ElementPlus).use(Context).mount('#app')
