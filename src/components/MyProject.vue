<template>
  <div class="my-project">
    <the-header></the-header>
    <br>
    <div class="description">
      {{project.description}}
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import TheFooter from './TheFooter';

  export default {
    name: 'my-project',
    props: {
      id: String
    },
    components: {
      theHeader: TheHeader,
      theFooter: TheFooter,
    },
    computed: {
      project() {
        return this.$store.getters.findProjectById(this.id);
      }
    }
  }
</script>

<style lang="scss">

  div.my-project {
    margin: 0 4rem 0 4rem;
    max-width: 50rem;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  div.description {
    position: relative;
    flex: 1;
  }
</style>