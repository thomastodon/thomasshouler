<template>
  <div class="footer">
    <img class=single-line src="single_line.png">
  </div>
</template>

<script>
  import '../assets/single_line.png';

  export default {
    name: 'ts-footer',
  }
</script>

<style scoped lang="scss">
  @import '../main';

  div {
    margin: 2rem 0 0 0;
    height: 2.75rem;
    max-width: 40rem;
    position: fixed;
    bottom: 1rem;
  }

  img.single-line {
    width: 100%;
    height: 1px;
    position: relative;
    top: -0.75rem;
  }

</style>