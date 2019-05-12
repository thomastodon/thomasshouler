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
      expect(document.title).to.equal('thomas shouler');
    });
  });

  describe('the header', () => {

    let header;

    beforeEach(() => {
      header = document.querySelector('.header');
    });

    it('contains my name', () => {
      expect(header.querySelector('.title').innerText).to.equal('thomas shouler');
    });

    it('contains a hand drawn line', () => {
      expect(header.querySelector('.single-line')).to.exist;
    });
  });

  describe('the footer', () => {

    let footer;

    beforeEach(() => {
      footer = document.querySelector('.footer');
    });

    it('contains a link to my tumblr', () => {
      expect(footer.querySelector('#light-bulb').href).to.equal('http://thomasshouler.tumblr.com/');
    });

    it('contains a link to my strava profile', () => {
      expect(footer.querySelector('#strava').href).to.equal('http://www.strava.com/athletes/tmshouler');
    });
  });

  afterEach(() => {
    vm.$destroy();
    vm.$el.remove();
  });
});
