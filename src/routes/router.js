import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import RepoDetail from "@/pages/RepoDetail.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/repo",
      name: "repoDetail",
      component: RepoDetail,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
