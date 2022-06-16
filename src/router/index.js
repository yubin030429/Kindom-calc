import Vue from "vue";
import VueRouter from "vue-router";
import toppingSet from "@/views/toppingSet";
import powderSet from "@/views/powderSet";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "toppingSet",
    component: toppingSet,
  },
  {
    path: "/powder",
    name: "powderSet",
    component: powderSet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
