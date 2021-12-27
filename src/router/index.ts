import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Desktop from "../views/Desktop.vue";
import Mobile from "../views/Mobile.vue";
import Cards from "../components/Cards.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/desktop",
    name: "Desktop",
    component: Desktop,
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: Mobile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
