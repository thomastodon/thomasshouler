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
    <light-box
      :image-source="lightBoxImageSource"
      :open="lightBoxOpen"
      v-on:exit="closeLightBox"/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import SingleLine from "./SingleLine";
  import ProjectImages from "./ProjectImages";
  import TheFooter from './TheFooter';
  import LightBox from "./LightBox";

  export default {
    name: 'my-project',
    props: {
      id: String,
    },
    data() {
      return {
        lightBoxImageSource: "",
        lightBoxOpen: false,
      }
    },
    components: {
      theHeader: TheHeader,
      singleLine: SingleLine,
      projectImages: ProjectImages,
      theFooter: TheFooter,
      lightBox: LightBox,
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
        this.lightBoxImageSource = $event.url;
        this.lightBoxOpen = true;
      },
      closeLightBox() {
        this.lightBoxOpen = false;
      },
    },
  }
</script>

<style scoped lang="scss">

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
    margin: 0.8rem 0;
  }

  .project-images {
    margin: 0.2rem 0;
    flex: 1;
    overflow: auto;
  }
</style>