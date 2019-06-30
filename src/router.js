import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProjects from "./components/MyProjects";
import MyResume from "./components/MyResume";
import MyProject from "./components/MyProject";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: MyProjects},
    {path: '/project/:id', component: MyProject, props: true},
    {path: '/cv', component: MyResume},
  ]
});