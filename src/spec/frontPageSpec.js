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
      expect(footer.querySelector('#bulb').href).to.equal('http://thomasshouler.tumblr.com/');
    });

    it('contains a link to my strava profile', () => {
      expect(footer.querySelector('#strava').href).to.equal('http://www.strava.com/athletes/thomasshouler');
    });

    it('contains a link to my flickr', () => {
      expect(footer.querySelector('#flickr').href).to.equal('http://www.flickr.com/photos/111512626@N08/sets/');
    });

    it('contains a link to my github', () => {
      expect(footer.querySelector('#git').href).to.equal('http://github.com/thomastodon');
    });

    it('contains a link to my instagram', () => {
      expect(footer.querySelector('#insta').href).to.equal('http://instagram.com/thomasshouler');
    });

    it('contains a link to my linkedin', () => {
      expect(footer.querySelector('#linkd').href).to.equal('http://www.linkedin.com/in/thomasshouler');
    });

    it('contains a link to my stackoverflow', () => {
      expect(footer.querySelector('#stack').href).to.equal('http://stackoverflow.com/users/3746982/thomasshouler');
    });

    it('contains a link to my vimeo', () => {
      expect(footer.querySelector('#vimeo').href).to.equal('http://vimeo.com/user22045579');
    });
  });

  afterEach(() => {
    vm.$destroy();
    vm.$el.remove();
  });
});
