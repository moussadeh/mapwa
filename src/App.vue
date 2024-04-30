<template>
  <NavBar />
  <img alt="Vue logo" src="./assets/logo.png" class="image">
  <AccueilComponent />
</template>

<script>
import NavBar from './components/NavBar.vue';
import AccueilComponent from './components/AccueilComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AccueilComponent
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  .image {
    height: 100px;
  }
</style>
