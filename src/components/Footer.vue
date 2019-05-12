<template>
  <div class="footer">
    <single-line></single-line>
  </div>
</template>

<script>
  import SingleLine from './SingleLine';

  export default {
    name: 'ts-footer',
    components: {SingleLine},
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

</style>