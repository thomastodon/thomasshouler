<template>
  <div class="header">
    <span class="title">thomas shouler</span>
    <single-line></single-line>
    <a class="link" href="https://thomasshouler.io">https://thomasshouler.io</a>
  </div>
</template>

<script>
  import SingleLine from './SingleLine';

  export default {
    name: 'ts-header',
    components: {SingleLine},
  }
</script>

<style scoped lang="scss">
  @import '../main';

  div.header {
    margin: 2rem 0 0 0;
    height: 2.75rem;
    max-width: 40rem;
  }

  span.title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: $dark-gray;
  }

  div.single-line {
    position: relative;
    top: -0.75rem;
  }

  a.link {
    font-size: 0.85rem;
    font-weight: 100;
    color: $dark-gray;
    position: relative;
    top: -1rem;
    text-decoration: none;
  }
</style>