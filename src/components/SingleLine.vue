<template>
  <div class="single-line">
    <img class=single-line src="single_line.png">
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
    margin: 0;
  }

  img.single-line {
    width: 100%;
    height: 1px;
  }
</style>