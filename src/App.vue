<template>
  <div class="container">
    <ts-header></ts-header>
  </div>
</template>

<script>
  import tsHeader from './components/Header.vue';

  export default {
    name: 'app',

    components: {
      tsHeader
    },
  }
</script>

<style lang="scss">
  @import 'main';

  div {
    margin: 0 6rem 0 6rem;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: $light-gray;
  }
</style>