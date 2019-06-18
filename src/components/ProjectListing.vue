<template>
  <div
    class="project-listing"
    v-on:click="navigate(id)"
    v-bind:style="{ top: top, left: left }">
    <img v-bind:style="{ width: width }">
  </div>
</template>

<script>
  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import router from '../router'

  export default {
    name: 'project-listing',
    props: {
      id: String,
      top: String,
      left: String,
      width: String,
    },
    created() {
      firebase
        .storage()
        .ref('my-projects/' + this.id + '/id.png')
        .getDownloadURL()
        .then(url => this.$el.querySelector('img').src = url);
    },
    methods: {
      navigate(id) {
        router.push({path: `/project/${id}`});
      }
    }
  }
</script>

<style scoped lang="scss">

  .project-listing {
    position: absolute;
  }

  img {
    -webkit-filter: drop-shadow(2px 2px 2px #757575);
    filter: drop-shadow(2px 2px 2px #757575);
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2px, Direction=135, Color='#757575')";
    -webkit-transition: -webkit-transform .5s ease-in-out;
    transition: transform .5s ease-in-out;
  }

  img:hover {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }
</style>