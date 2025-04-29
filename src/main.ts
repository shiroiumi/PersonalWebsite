import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./scss/style.scss";
import App from "./App.vue";
import AboutMe from "./pages/AboutMe.vue";
import Resume from "./pages/Resume.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AboutMe },
    { path: "/resume", component: Resume },
  ],
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
