<template>
  <div class="double-line">
    <img class=double-line src="/assets/double_line.png">
  </div>
</template>

<script>
  import '../assets/double_line.png';

  export default {
    name: 'double-line',
  }
</script>

<style scoped lang="scss">

  div.double-line {
    height: 0.25rem;
  }

  img.double-line {
    position: relative;
    top: -0.66rem;
    width: 100%;
    height: 100%;
  }
</style>