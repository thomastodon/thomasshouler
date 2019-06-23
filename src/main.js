import Vue from 'vue'
import App from './App.vue'
import './assets/favicon.png';
import router from './router';
import * as firebase from "firebase/app";
import "firebase/storage";
import store from "./store";

const firebaseConfig = {
  projectId: "thomasshouler-id",
  storageBucket: "thomasshouler-id.appspot.com",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});

store.dispatch('getProjects');