<template>
  <div class="the-header">
    <div class="text">
      <span class="title">{{title}}</span>
      <a class="link" href="https://thomasshouler.io">https://thomasshouler.io</a>
    </div>
    <double-line/>
  </div>
</template>

<script>
  import DoubleLine from './DoubleLine';

  export default {
    name: 'the-header',
    props: {
      title: String,
    },
    components: {DoubleLine},
  }
</script>

<style scoped lang="scss">

  @import '../main';

  div.the-header {
    margin: 2rem 0 0 0;
    height: auto;
  }

  div.the-header > .text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.1rem;
  }

  span.title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: $dark-gray;
  }

  a.link {
    font-size: 0.85rem;
    font-weight: 100;
    color: $dark-gray;
    text-decoration: none;
    align-self: flex-end;
  }
</style>