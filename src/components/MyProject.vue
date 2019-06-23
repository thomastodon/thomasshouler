<template>
  <div class="my-project">
    <the-header :title="id"/>
    <div class="description">{{description}}</div>
    <single-line/>
    <div class="images"></div>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import TheFooter from './TheFooter';
  import SingleLine from "./SingleLine";

  export default {
    name: 'my-project',
    props: {
      id: String
    },
    components: {
      singleLine: SingleLine,
      theHeader: TheHeader,
      theFooter: TheFooter,
    },
    computed: {
      project() {
        return this.$store.getters.findProjectById(this.id);
      },
      description() {
        return this.project ? this.project.description : ""
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
    font-weight: 300;
  }

  div.images {
    flex: 1;
  }
</style>