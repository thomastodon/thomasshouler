<template>
  <a :href="url" class="social-icon" :id="image">
    <img v-bind:src="'./../assets/' + image + '.png'">
  </a>
</template>

<script>
  import '../assets/flickr.png';
  import '../assets/git.png';
  import '../assets/insta.png';
  import '../assets/linkd.png';
  import '../assets/stack.png';
  import '../assets/strava.png';
  import '../assets/bulb.png';
  import '../assets/vimeo.png';

  export default {
    name: 'social-icon',
    props: ['image', 'url'],
  }
</script>

<style scoped lang="scss">

  a.social-icon > img {
    height: 1.5rem;
    opacity: 0.3;
    margin: 0.2rem;
  }

  a.social-icon > img:hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
</style>