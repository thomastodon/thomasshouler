<template>
  <div class="my-project">
    <the-header :title="id"/>
    <div class="description">{{description}}</div>
    <single-line/>
    <div class="images">
      <image-thumbnail
        v-for="image in images"
        :key="image.id"
        :url="image.url"/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader';
  import TheFooter from './TheFooter';
  import SingleLine from "./SingleLine";
  import ImageThumbnail from "./ImageThumbnail";

  export default {
    name: 'my-project',
    props: {
      id: String,
    },
    components: {
      singleLine: SingleLine,
      theHeader: TheHeader,
      theFooter: TheFooter,
      imageThumbnail: ImageThumbnail,
    },
    computed: {
      project() {
        return this.$store.getters.findProjectById(this.id);
      },
      description() {
        return this.project ? this.project.description : ""
      },
      images() {
        return this.$store.getters.getImagesByProjectId(this.id);
      }
    },
    created() {
      this.$store.dispatch('getImages', this.id);
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

  div.images {
    flex: 1;
    overflow: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;

    margin-left: -0.5rem;
    left: 0.5rem;
    position: relative;

    @for $i from 1 through 36 {
      div:nth-child(#{$i}) {
        $h: (random(8) + 8) + rem;
        width: $h;
      }
    }
  }

  div.image-thumbnail {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;

    max-width: 20rem;
    height: 8rem;
    margin: 0 0.5rem 0.5rem 0;
    overflow: hidden;
  }
</style>