import Vue from "vue";
import VueRouter from "vue-router";
import toppingSet from "@/views/toppingSet";
import firstPage from "@/views/firstPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "firstPage",
    component: firstPage,
  },
  {
    path: "/toppingSet",
    name: "toppingSet",
    component: toppingSet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
