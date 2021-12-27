<template>
  <div class="bg-blue-100 h-screen">
    <Canvas/>

    <!-- <router-view/> -->
  </div>
</template>

<script>
  // import Header from './components/Header.vue'
  import Canvas from './components/Canvas.vue'

  export default {
    components: {
      // Header
      Canvas
    }
  }
</script>

<style src="./assets/tailwind.css">
</style>
