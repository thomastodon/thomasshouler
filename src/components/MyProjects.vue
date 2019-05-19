<template>
  <div class="my-projects">
    <the-header></the-header>
    <div class="my-project-listings">
      <project-listing
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :top="project.top"
        :left="project.left"
        :width="project.width">
      </project-listing>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import TheFooter from './TheFooter';
  import ProjectListing from './ProjectListing';
  import {csvToObjects} from '../utility';
  import '../data/project.csv';

  export default {
    name: 'my-projects',
    components: {
      theHeader: TheHeader,
      theFooter: TheFooter,
      projectListing: ProjectListing,
    },
    data() {
      return {
        projects: csvToObjects('../data/project.csv')
      }
    }
  }
</script>

<style lang="scss">

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