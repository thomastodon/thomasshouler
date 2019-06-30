<template>
  <div class="image-thumbnail" v-on:click="thumbnailClicked">
    <img v-bind:src="this.url">
  </div>
</template>

<script>
  export default {
    name: 'image-thumbnail',
    props: {
      url: String,
    },
    methods: {
      thumbnailClicked() {
        this.$emit('thumbnail-clicked', {url: this.url})
      },
    },
  }
</script>

<style scoped lang="scss">

  div {

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;

    max-width: 20rem;
    overflow: hidden;
  }

  img {

    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
</style>