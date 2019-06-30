<template>
  <div class="my-projects">
    <the-header title="thomas shouler"/>
    <div class="my-project-listings">
      <project-listing
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :top="project.top"
        :left="project.left"
        :width="project.width"/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import TheFooter from './TheFooter';
  import ProjectListing from './ProjectListing';

  export default {
    name: 'my-projects',
    components: {
      theHeader: TheHeader,
      theFooter: TheFooter,
      projectListing: ProjectListing,
    },
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    }
  }
</script>

<style scoped lang="scss">

  div.my-projects {
    margin: 0 4rem 0 4rem;
    max-width: 50rem;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  div.my-project-listings {
    position: relative;
    flex: 1;
  }
</style>