import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from './plugins/element-plus'

// 引入全局样式
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
