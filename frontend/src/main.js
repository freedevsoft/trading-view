import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css'

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

