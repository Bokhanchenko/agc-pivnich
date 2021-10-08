import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import mixins from "./plugins/mixins";
import "@/styles/index.scss";

createApp(App)
  .use(router)
  .mixin(mixins)
  .mount("#app");
