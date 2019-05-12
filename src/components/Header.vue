<template>
  <div class="header">
    <a class="title">thomas shouler</a>
    <img class=single-line src="single_line.png">
    <a class="link">http://thomasshouler.io</a>
  </div>
</template>

<script>
  import '../assets/single_line.png';

  export default {
    name: 'ts-header',
  }
</script>

<style scoped lang="scss">
  @import '../main';

  div {
    margin: 2rem 0 0 0;
    height: 2.75rem;
    max-width: 40rem;
  }

  a.title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: $dark-gray;
  }

  img.single-line {
    width: 100%;
    height: 1px;
    position: relative;
    top: -0.75rem;
  }

  a.link {
    font-size: 0.85rem;
    font-weight: 100;
    color: $dark-gray;
    position: relative;
    top: -1rem;
  }
</style>