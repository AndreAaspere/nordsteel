<template>
  <div class="flex justify-center bg-gray-50 canvas-parent">
    <div class="canvas">
      <div class="h-1/6 flex flex-col sm:flex-row">
        <div class="w-full h-1/2 sm:h-full sm:w-1/2 bg-gray-100">
          <img alt="logo" class="logo z-10 h-1/2" :src="require('@/assets/logo.svg')">
        </div>
        <div class="w-full h-1/2 sm:h-full sm:w-1/2 bg-gray-300 flex justify-end">
          <svg v-on:click="emitValue()" class="menuicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="bg-gray-200 h-3/6 flex flex-col-reverse sm:flex-row">
        <div class="bg-gray-400 flex w-full sm:w-1/3">
          <!-- menu -->
          <!-- rings 1 -->
          <div class="w-full rings-section-1 flex flex-row">
            {{boo}}
            <div class="w-1/2" v-on:mouseover="boo = true">
              <!-- ring 1 -->
              <Ring1/>
            </div>
            <div class="w-1/2 h-full">
              <!-- ring 2 -->
              <div class="h-1/2"><Ring1/></div>
              <!-- ring 3 -->
              <div class=""><Ring1/></div>
            </div>
          </div>
          <div class="rings flex flex-row">
          </div>
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
        <div class="w-full sm:w-2/3">
              <img
              alt="postmark"
              :src="require('@/assets/postmark.svg')"
              class="h-5/6"
            >
          <div v-if="this.$route.name === 'Certificates'">pdf
            <pdf src="https://www.africau.edu/images/default/sample.pdf"></pdf>
          </div>
        </div>
      </div>
      <div class="h-2/6">
        <!-- separator -->
        <div
          class="bg-gray-500"
          v-bind:class="{ 'separator': showMenu, 'separator-hidden': !showMenu}"
        ></div>
        <!-- view -->
        <div class="bg-gray-300 view">
          <!-- rings 2 -->
          <div class="flex w-full">
            <div class="ring4"><Ring1/></div>
            <div class="ring5"><Ring1/></div>
            <div class="ring6"><Ring1/></div>
            <div class="ring7"><Ring1/></div>
            <div class="ring8"><Ring1/></div>
            <div class="ring9 hidden">r9</div>
          </div>
          <router-view v-if="showMenu"/>
        </div>
        <div class="bg-gray-500 footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Ring1 from './Ring1.vue'

export default {
  name: 'Canvas',
  components: { Ring1 },
  setup() {
    const showMenu = ref(false)
    const displayCertificate = ref(false)
    displayCertificate.value = false

    function emitValue() {
      showMenu.value = !showMenu.value
    }
    return {
      showMenu,
      emitValue,
      displayCertificate,
      // RingA,
      // pdf
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
  @apply bg-gray-900;
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
  padding: 15%;
  font-size: 2.4vh;
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.ring {
  /* @apply ring-offset-0 cursor-pointer; */
}
.ring1 {
  /* width: 20%; */
}
.ring2 {
  /* width: 20%; */
}
.ring3 {
  /* width: 20%; */
}
.ring4 {
  width: 30%;
}
.ring5 {
  width: 17.5%;
}
.ring6 {
  width: 17.5%;
}
.ring7 {
  width: 17.5%;
}
.ring8 {
  width: 17.5%;
}
.ring9 {
}
</style>
