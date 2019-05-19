<template>
  <a :href="url" class="social-icon" :id="image">
    <img v-bind:src="'images/' + image + '.png'">
  </a>
</template>

<script>

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