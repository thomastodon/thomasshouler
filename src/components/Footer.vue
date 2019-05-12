<template>
  <div class="footer">
    <single-line></single-line>
    <social-icon url="http://thomasshouler.tumblr.com" image="bulb"></social-icon>
    <social-icon url="http://www.strava.com/athletes/tmshouler" image="strava"></social-icon>
  </div>
</template>

<script>
  import SingleLine from './SingleLine';
  import SocialIcon from './SocialIcon';
  import '../assets/icon/bulb.png';
  import '../assets/icon/strava.png';

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