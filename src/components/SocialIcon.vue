<template>
  <div class="social-icon">
    <a :href="url" :id="image">
      <img v-bind:src="'./../assets/' + image + '.png'">
    </a>
  </div>
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

  div {
    height: 1.6rem;
    width: 1.6rem;
    margin: 0.7rem 0.7rem 0.7rem 0;
  }

  a {
    position: relative;
    left: 0;
    width: 100%;
    text-align: center;
  }

  a > img {
    height: 100%;
    opacity: 0.3;
  }

  a > img:hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
</style>