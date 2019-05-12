<template>
  <div class="footer">
    <single-line></single-line>
    <a target="_blank" href="http://thomasshouler.tumblr.com" class="icon">
      <img src="bulb-inv.png">
    </a>
  </div>
</template>

<script>
  import SingleLine from './SingleLine';
  import '../assets/icon/bulb-inv.png';

  export default {
    name: 'ts-footer',
    components: {SingleLine},
  }
</script>

<style scoped lang="scss">

  a.icon > img {
    height: 1.75rem;
    opacity: 0.3;
  }

  a.icon > img:hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }

  div.footer {
    margin: 2rem 0 0 0;
    height: 2.75rem;
    max-width: 40rem;
    position: fixed;
    bottom: 1rem;
  }

</style>