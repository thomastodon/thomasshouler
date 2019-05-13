<template>
  <div class="container">
    <ts-header></ts-header>
    <ts-footer></ts-footer>
  </div>
</template>

<script>
  import tsHeader from './components/Header.vue';
  import tsFooter from './components/Footer.vue';
  import './assets/cv.pdf';

  export default {
    name: 'app',

    components: {
      tsHeader,
      tsFooter
    },

    beforeCreate() {
      document.title = 'thomas shouler';
    }
  }
</script>

<style lang="scss">
  @import 'main';

  div {
    margin: 0 4rem 0 4rem;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: $light-gray;
  }
</style>