<template>
  <div class="bg-blue-200">
    Header
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
// import { ref } from 'vue';
// import { inject } from 'vue'

export default {
  name: 'Header',
  // setup() {
  //   const emitter = inject("emitter");

  //   const showMenu = ref(false)

  //   function emitValue() {
  //     showMenu.value = !showMenu.value
  //     emitter.emit("showMenu", showMenu.value);
  //   }

  //   return {
  //     emitValue
  //   }
  // }
}
</script>

<style scoped>
/* .menuicon {
  @apply h-10 w-10 text-gray-700 cursor-pointer z-40 hover:text-gray-500;
}
.header {
  width: calc(2*70vh);
} */
</style>
