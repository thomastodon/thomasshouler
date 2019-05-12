<template>
  <ts-header></ts-header>
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

  body {
    font-family: 'Roboto', sans-serif;
    background-color: $light-gray;
  }
</style>