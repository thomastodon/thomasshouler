<template>
  <div class="project-images" v-bind:style="style">
    <image-thumbnail
      v-on:thumbnail-clicked="thumbnailClicked"
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
      gutterRem: Number,
      rowHeightRem: Number,
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
          'margin-left': `${-1 * this.gutterRem}rem`,
          'left': `${this.gutterRem}rem`,
        }
      },
      thumbnailStyle() {
        return {
          'margin': `0 ${this.gutterRem}rem ${this.gutterRem}rem 0`,
          'height': `${this.rowHeightRem}rem`,
        }
      },
    },
    methods:{
      thumbnailClicked($event) {
        this.$emit('thumbnail-clicked', $event)
      },
    },
    created() {
      this.$store.dispatch('getImages', this.projectId);
    },
  }

</script>

<style scoped lang="scss">

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
</style>