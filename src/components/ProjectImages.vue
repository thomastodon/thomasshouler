<template>
  <div class="project-images" v-bind:style="style">
    <image-thumbnail
      v-bind:style="thumbnailStyle"
      v-for="image in images"
      :key="image.id"
      :url="image.url"/>
  </div>
</template>

<script>

  import ImageThumbnail from "./ImageThumbnail";

  export default {
    name: 'project-images',
    props: {
      projectId: String,
      gutter: String,
      rowHeight: String,
    },
    components: {
      imageThumbnail: ImageThumbnail,
    },
    computed: {
      images() {
        return this.$store.getters.getImagesByProjectId(this.projectId);
      },
      style() {
        return {
          'margin-left': -1 * this.gutter,
          'left': this.gutter,
        }
      },
      thumbnailStyle() {
        return {
          'margin': `0 ${this.gutter} ${this.gutter} 0`,
          'height': this.rowHeight,
        }
      }
    },
    created() {
      this.$store.dispatch('getImages', this.projectId);
    },
  }

</script>

<style lang="scss">

  div.project-images {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;

    position: relative;

    @for $i from 1 through 36 {
      div:nth-child(#{$i}) {
        $width: (random(8) + 8) + rem;
        width: $width;
      }
    }
  }

  div.image-thumbnail {

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;

    max-width: 20rem;
    overflow: hidden;
  }
</style>