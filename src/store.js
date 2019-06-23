import Vue from 'vue'
import Vuex from 'vuex'
import {getProjects} from "./data/projectClient";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    getProjects({commit}) {
      commit('setProjects', getProjects());
    }
  },
  getters: {
    findProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    }
  }
})