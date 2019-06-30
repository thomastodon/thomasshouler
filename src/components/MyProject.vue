<template>
  <div class="my-project">
    <the-header :title="id"/>
    <div class="description">{{description}}</div>
    <single-line/>
    <project-images :projectId="id" gutter="0.5rem" rowHeight="8rem"/>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import SingleLine from "./SingleLine";
  import ProjectImages from "./ProjectImages";
  import TheFooter from './TheFooter';

  export default {
    name: 'my-project',
    props: {
      id: String,
    },
    components: {
      theHeader: TheHeader,
      singleLine: SingleLine,
      projectImages: ProjectImages,
      theFooter: TheFooter,
    },
    computed: {
      project() {
        return this.$store.getters.findProjectById(this.id);
      },
      description() {
        return this.project ? this.project.description : ""
      },
    }
  }
</script>

<style lang="scss">

  div.my-project {

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;

    margin: 0 4rem 0 4rem;
    max-width: 50rem;
    min-height: 100vh;
  }

  div.description {

    position: relative;
    font-weight: 300;
  }

  div.project-images {

    flex: 1;
    overflow: auto;
  }
</style>