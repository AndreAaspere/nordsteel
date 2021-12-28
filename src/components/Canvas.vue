<template>
  <div class="flex justify-center bg-blue-300 canvas-parent">
    <div class="canvas">
      <div class="h-1/6 flex flex-col sm:flex-row">
        <div class="w-full h-1/2 sm:h-full sm:w-1/2 bg-blue-500">
          <img alt="logo" class="logo z-10 h-1/2" :src="require('@/assets/logo.svg')">
        </div>
        <div class="w-full h-1/2 sm:h-full sm:w-1/2 bg-blue-700 flex justify-end">
          <svg v-on:click="emitValue()" class="menuicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="bg-blue-600 h-3/6 flex flex-col-reverse sm:flex-row">
        <div class="bg-blue-800 flex w-full sm:w-1/3">
          <div v-if="showMenu" id="nav" class="menu flex flex-col">
            <router-link class="nav-link" to="/about">ETTEVÕTTEST</router-link>
            <router-link class="nav-link" to="/contact">KONTAKT</router-link>
            <router-link class="nav-link" to="/location">ASUKOHT</router-link>
            <router-link class="nav-link" to="/certificates">SERTIFIKAADID</router-link>
            <router-link class="nav-link" to="/team">MEESKOND</router-link>
            <router-link class="nav-link" to="/vacancy">VABAD TÖÖKOHAD</router-link>
            <router-link v-on:click="emitValue()" class="nav-link" to="/">>></router-link>
          </div>
        </div>
        <div class="w-full sm:w-1/3">card</div>
      </div>
      <div class="h-2/6">
        <div
          class="bg-blue-900"
          v-bind:class="{ 'separator': showMenu, 'separator-hidden': !showMenu}"
        ></div>
        <div class="bg-blue-700 view">
          <router-view v-if="showMenu"/>
        </div>
        <div class="bg-blue-900 footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Canvas',
  setup() {
    const showMenu = ref(false)

    function emitValue() {
      showMenu.value = !showMenu.value
    }

    return {
      showMenu,
      emitValue
    }
}
}
</script>

<style scoped>
.canvas-parent {
  height: 100%;
  font-family: Verdana, sans-serif;
}
.canvas {
  width: 140vh;
}
.canvas-resize {

}
.separator {
  height: 5%;
  @apply bg-blue-900;
}
.separator-hidden {
  height: 5%;
  @apply bg-white;
}
.view {
  height: 75%;

}
.footer {
  height: 20%;
}
.logo {
  margin-top: 3%;
}
.menuicon {
  margin-top: 4%;
  margin-right: 5%;
  height: 40%;
  @apply text-gray-700 cursor-pointer z-40 hover:text-gray-500;
}
.menu {
  padding: 10%;
  font-size: 2.6vh;
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
