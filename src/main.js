import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/bootstrap/bootstrap.bundle.min.js";
import "./assets/styles/main.css";

createApp(App).use(router).mount("#app");
