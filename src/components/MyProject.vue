<template>
  <div class="my-project">
    <the-header :title="id"/>
    <div class="description">{{description}}</div>
    <single-line/>
    <project-images
      class="project-images"
      :projectId="id"
      :gutterRem="0.5"
      :rowHeightRem="8"
      v-on:thumbnail-clicked="openLightBox"/>
    <the-footer/>
    <div class="light-box" v-on:click="closeLightBox"><img></div>
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
    },
    methods: {
      openLightBox($event) {
        this.$el.querySelector('.light-box').style.setProperty('display', 'flex');
        this.$el.querySelector('.light-box').querySelector('img').src = $event.url
      },
      closeLightBox($event) {
        const elementClicked = $event.target.tagName.toLowerCase();
        if (elementClicked === 'img') return;
        this.$el.querySelector('.light-box').style.setProperty('display', 'none');
      },
    },
  }
</script>

<style scoped lang="scss">

  @import '../main';

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

  .project-images {
    flex: 1;
    overflow: auto;
  }

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