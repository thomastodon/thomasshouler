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