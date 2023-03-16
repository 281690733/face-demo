import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../views/Layout.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
