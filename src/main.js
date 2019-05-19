import Vue from 'vue'
import App from './App.vue'
import '../static/favicon.png';
import router from './router';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
