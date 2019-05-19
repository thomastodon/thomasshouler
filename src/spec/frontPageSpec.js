import App from '../App.vue';
import Vue from 'vue';
import router from './../router'

Vue.config.devtools = false;
Vue.config.productionTip = false;

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
      router: router,
      render: (h) => h(App)
    });

  });

  describe('the title', () => {

    it('contains my name', () => {
      expect(document.title).to.equal('thomas shouler');
    });
  });

  describe('the header', () => {

    let theHeader;

    beforeEach(() => {
      theHeader = document.querySelector('.the-header');
    });

    it('contains my name', () => {
      expect(theHeader.querySelector('.title').innerText).to.equal('thomas shouler');
    });

    it('contains a hand drawn line', () => {
      expect(theHeader.querySelector('.single-line')).to.exist;
    });
  });

  describe('the footer', () => {

    let theFooter;

    beforeEach(() => {
      theFooter = document.querySelector('.the-footer');
    });

    it('contains a link to my tumblr', () => {
      expect(theFooter.querySelector('#bulb').href).to.equal('http://thomasshouler.tumblr.com/');
    });

    it('contains a link to my strava profile', () => {
      expect(theFooter.querySelector('#strava').href).to.equal('http://www.strava.com/athletes/thomasshouler');
    });

    it('contains a link to my flickr', () => {
      expect(theFooter.querySelector('#flickr').href).to.equal('http://www.flickr.com/photos/111512626@N08/sets/');
    });

    it('contains a link to my github', () => {
      expect(theFooter.querySelector('#git').href).to.equal('http://github.com/thomastodon');
    });

    it('contains a link to my instagram', () => {
      expect(theFooter.querySelector('#insta').href).to.equal('http://instagram.com/thomasshouler');
    });

    it('contains a link to my linkedin', () => {
      expect(theFooter.querySelector('#linkd').href).to.equal('http://www.linkedin.com/in/thomasshouler');
    });

    it('contains a link to my stackoverflow', () => {
      expect(theFooter.querySelector('#stack').href).to.equal('http://stackoverflow.com/users/3746982/thomasshouler');
    });

    it('contains a link to my vimeo', () => {
      expect(theFooter.querySelector('#vimeo').href).to.equal('http://vimeo.com/user22045579');
    });
  });

  afterEach(() => {
    vm.$destroy();
    vm.$el.remove();
  });
});
