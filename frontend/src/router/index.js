import { createWebHistory, createRouter } from 'vue-router';
import Prices from "../pages/Prices.vue";
import Markets from "../pages/Markets.vue";

const routes = [{
    path: "/",
    name: "Prices",
    component: Prices
},
{
    path: "/markets",
    name: "Markets",
    component: Markets,
    meta: {
        requiresAuth: true
    },
},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;