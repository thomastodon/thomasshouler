<template>
  <div class="footer">
    <single-line></single-line>
    <social-icon url="http://www.flickr.com/photos/111512626@N08/sets/" image="flickr"></social-icon>
    <social-icon url="http://github.com/thomastodon" image="git"></social-icon>
    <social-icon url="http://instagram.com/thomasshouler" image="insta"></social-icon>
    <social-icon url="http://www.linkedin.com/in/thomasshouler" image="linkd"></social-icon>
    <social-icon url="http://stackoverflow.com/users/3746982/thomasshouler" image="stack"></social-icon>
    <social-icon url="http://www.strava.com/athletes/thomasshouler" image="strava"></social-icon>
    <social-icon url="http://thomasshouler.tumblr.com" image="bulb"></social-icon>
    <social-icon url="http://vimeo.com/user22045579" image="vimeo"></social-icon>
  </div>
</template>

<script>
  import SingleLine from './SingleLine';
  import SocialIcon from './SocialIcon';
  import '../assets/icon/flickr.png';
  import '../assets/icon/git.png';
  import '../assets/icon/insta.png';
  import '../assets/icon/linkd.png';
  import '../assets/icon/stack.png';
  import '../assets/icon/strava.png';
  import '../assets/icon/bulb.png';
  import '../assets/icon/vimeo.png';

  export default {
    name: 'ts-footer',
    components: {SocialIcon, SingleLine},
  }
</script>

<style scoped lang="scss">

  div.footer {
    margin: 2rem 0 0 0;
    height: 2.75rem;
    max-width: 40rem;
    position: fixed;
    bottom: 1rem;
  }

</style>