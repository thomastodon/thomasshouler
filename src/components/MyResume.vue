<template>
  <div class="my-resume">
    <embed type="application/pdf"/>
  </div>
</template>

<script>
  import * as firebase from 'firebase/app';
  import 'firebase/storage';

  export default {
    name: 'my-resume',

    created() {

      firebase
        .storage()
        .ref('shouler_thomas_cv.pdf')
        .getDownloadURL()
        .then(url => this.$el.querySelector('embed').src = url);
    },
  }
</script>

<style scoped lang="scss">

  embed {
    min-height: 100vh;
    width: 100%;
  }

  .my-resume {
    background-color: rgb(82, 86, 89);
  }
</style>