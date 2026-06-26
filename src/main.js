import { createApp } from "vue";
import App from "./App.vue";
import "./styles/app.css";
import { router } from "./router/index.js";

createApp(App).use(router).mount("#app");