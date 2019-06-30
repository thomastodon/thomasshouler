import Vue from 'vue'
import Vuex from 'vuex'
import {getProjects} from "./data/projectClient";
import {getImages} from "./data/imageClient";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    projects: {},
    images: {},
  },
  mutations: {
    setProject(state, project) {
      Vue.set(state.projects, project.id, project);
    },
    setImage(state, image) {
      Vue.set(state.images, image.id, image);
    },
    addImageToProject(state, {id, projectId, order}) {
      if (state.projects[projectId].images === undefined) Vue.set(state.projects[projectId], 'images', []);

      Vue.set(state.projects[projectId].images, order, id);
    },
  },
  actions: {
    getProjects({commit}) {
      getProjects()
        .forEach(project => commit('setProject', project));
    },
    getImages({commit}, projectId) {
      getImages(projectId)
        .then(images => images.forEach(image => {
          image.then(image => {
            commit('setImage', image);
            commit('addImageToProject', image);
          });
        }));
    },
  },
  getters: {
    findProjectById: (state) => (id) => {
      return state.projects[id];
    },
    getImagesByProjectId: (state) => (id) => {

      const project = state.projects[id];
      if (project === undefined) return [];

      const images = project.images;
      if (images === undefined) return [];

      return images.map(imageId => state.images[imageId]);
    },
  },
})