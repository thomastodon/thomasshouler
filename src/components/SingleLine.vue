<template>
  <div class="single-line">
    <img class=single-line src="/assets/single_line.png">
  </div>
</template>

<script>
  import '../assets/single_line.png';

  export default {
    name: 'single-line',
  }
</script>

<style scoped lang="scss">

  div.single-line {
    height: 0.05rem;
  }

  img.single-line {
    position: relative;
    height: 100%;
    width: 100%;
    top: -0.9rem;
  }
</style>