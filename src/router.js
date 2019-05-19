import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProjects from "./components/MyProjects";
import MyResume from "./components/MyResume";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: MyProjects},
    {path: '/cv', component: MyResume},
  ]
});