import { createApp } from "vue";
// import { createHead } from "@vueuse/head";
import VueAxios from "vue-axios";
// import "bootstrap/dist/css/bootstrap.css";

import "tailwindcss/dist/tailwind.min.css";
import "animate.css";

import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App);

// app.use(createHead);

app.use(store);
app.use(router);

app.mount("#app");