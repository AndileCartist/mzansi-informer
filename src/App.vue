<template>

  <div id="app">
    <meta charset="utf-8">
    <basic-layout> </basic-layout>
  </div>
</template>

<script>
import BasicLayout from './layouts/BasicLayout.vue'

export default {
  name: 'App',
  components: {
    BasicLayout
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
</style>
