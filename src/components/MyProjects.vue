<template>
  <div class="my-projects">
    <the-header></the-header>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from './TheHeader.vue';
  import TheFooter from './TheFooter.vue';

  export default {
    name: 'my-projects',
    components: {
      theHeader: TheHeader,
      theFooter: TheFooter,
    },
  }
</script>

<style lang="scss">
  @import '../main';

  div.my-projects {
    margin: 0 4rem 0 4rem;
  }

  body {
    background-color: $light-gray;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

</style>