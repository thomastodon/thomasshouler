<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

    beforeCreate() {
      document.title = 'thomas shouler';
    }
  }
</script>

<style lang="scss">
  @import 'main';

  body {
    overflow: hidden;
    background-color: $light-gray;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }
</style>