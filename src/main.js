import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import mixins from "./plugins/mixins";
import "@/styles/index.scss";

Object.keys("HERE=====================>>>", process.env.npm_lifecycle_event);

createApp(App)
  .use(router)
  .mixin(mixins)
  .mount("#app");
