<template>
  <div class="light-box" v-on:click="onClick">
    <img>
  </div>
</template>

<script>

  export default {
    name: 'light-box',
    props: {
      imageSource: String,
      open: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onClick(event) {
        const elementClicked = event.target.tagName.toLowerCase();
        if (elementClicked === 'img') return;
        this.$emit('exit')
      },
      onKeyUp(event) {
        if (event.key === 'Escape') this.$emit('exit');
      },
    },
    watch: {
      open: function (open) {
        if (open) {
          this.$el.style.setProperty('display', 'flex');
          this.$el.querySelector('img').src = this.imageSource;
        } else {
          this.$el.style.setProperty('display', 'none');
        }
      },
    },
    created() {
      window.addEventListener('keyup', this.onKeyUp)
    },
  }
</script>

<style scoped lang="scss">

  @import '../main';

  .light-box {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: space-evenly;
  }

  .light-box > img {
    max-width: 80%;
    max-height: 80%;
    align-self: center;
    background-color: $light-gray;
    padding: 0.8rem;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
</style>