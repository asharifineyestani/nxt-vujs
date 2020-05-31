<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @import "../sass/main.scss";

  body {
    height: 100%;

    #app {
      height: 100%;
    }
  }
</style>
