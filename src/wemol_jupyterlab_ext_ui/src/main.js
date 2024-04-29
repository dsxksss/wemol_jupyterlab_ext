import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 开发使用
createApp(App).mount("#app");


// build的使用
export function createMyApp(options) {
    return createApp(App).mount(options.el);
}
