"use strict";

import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.scss";
import db from "./datastore";

const app = createApp(App);
app.config.globalProperties.$db = db;
app.mount("#app");

