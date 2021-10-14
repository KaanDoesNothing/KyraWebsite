import { createWebHistory, createRouter } from "vue-router";
import Home from "./routes/Home.vue";
import Dashboard from "./routes/Dashboard.vue";
import Guilds from "./routes/Dashboard/Guilds.vue";
import Guild from "./routes/Dashboard/Guild.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => Home,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => Dashboard,
    },
    {
        path: "/dashboard/guilds",
        name: "Manage Guilds",
        component: () => Guilds,
    },
    {
        path: "/dashboard/guild/:id",
        name: "Manage Guild",
        component: () => Guild,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
