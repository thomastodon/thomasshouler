<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import './assets/cv.pdf';

  export default {
    name: 'app',

    components: {
      theHeader: TheHeader,
      theFooter: TheFooter,
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