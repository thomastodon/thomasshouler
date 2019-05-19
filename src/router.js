import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProjects from "./components/MyProjects";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: MyProjects},
  ]
});