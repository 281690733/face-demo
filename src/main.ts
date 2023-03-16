import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const vueApp = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  vueApp.component(key, component);
}
vueApp.use(store).use(router).use(ElementPlus).mount("#app");
