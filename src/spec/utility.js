import Vue from 'vue';
import router from './../router'

Vue.config.devtools = false;
Vue.config.productionTip = false;

export const setup = (component) => {

  const spec = document.createElement('div');
  spec.id = 'spec';
  document.querySelector('body').appendChild(spec);

  return new Vue({
    el: '#spec',
    router: router,
    render: h => h(component)
  });
};

export const tearDown = (vm) => {
  vm.$destroy();
  vm.$el.remove();
};