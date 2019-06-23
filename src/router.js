import Vue from 'vue'
import VueRouter from 'vue-router'
import MyProjects from "./components/MyProjects";
import MyResume from "./components/MyResume";
import MyProject from "./components/MyProject";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/', component: MyProjects},
    {path: '/cv', component: MyResume},
    {path: '/project/:id', component: MyProject, props: true}
  ]
});