<template>
  <div class="image-thumbnail">
    <img v-bind:src="this.url">
  </div>
</template>

<script>
  export default {
    name: 'image-thumbnail',
    props: {
      url: String,
    },
  }
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
</style>