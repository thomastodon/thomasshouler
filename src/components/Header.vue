<template>
  <div class="header">
    <a class="title">thomas shouler</a>
    <img class=single-line src="single_line.png">
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

  a {
    font-size: 1.4rem;
    font-weight: 700;
    color: $dark-gray;
  }

  img.single-line {
    width: 100%;
    height: 1px;
  }
</style>