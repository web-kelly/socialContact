import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import "lib-flexible/flexible.js";
import 'assets/css/global.css'

createApp(App).use(store).use(router).use(vant).mount('#app')
