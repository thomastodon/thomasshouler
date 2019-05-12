import App from '../App.vue';
import Vue from 'vue';

describe('on the front page...', () => {

  let vm;

  Vue.config.devtools = false;
  Vue.config.productionTip = false;

  beforeEach(() => {

    const spec = document.createElement('div');
    spec.id = 'spec';
    document.querySelector('body').appendChild(spec);

    vm = new Vue({
      el: '#spec',
      render: (h) => h(App)
    });

  });

  describe('the title', () => {

    it('contains my name', () => {
      expect(document.title).toBe('thomas shouler');
    });
  });

  describe('the header', () => {

    let header;

    beforeEach(() => {
      header = document.querySelector('.header');
    });

    it('contains my name', () => {
      expect(header.querySelector('.title').innerText).toBe('thomas shouler');
    });

    it('contains a hand drawn line', () => {
      expect(header.querySelector('.single-line')).not.toBeUndefined();
    });
  });

  afterEach(() => {
    vm.$destroy();
    vm.$el.remove();
  });
});
