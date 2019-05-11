<template>
  <div class="header">
    <a class="title">thomas shouler</a>
    <img class=single-line src="single_line.png">
  </div>
</template>

<script>
  require('../assets/single_line.png');
  export default {
    name: 'ts-header',
  }
</script>

<style lang="scss">
  img.single-line {
    width: 100%;
    height: 1px;
  }
</style>