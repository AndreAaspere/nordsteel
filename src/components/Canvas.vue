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
          <div v-if="!showMenu" class="w-full rings-section-1 flex flex-row">
            <div class="w-1/2">
              <!-- ring 1 -->
              <Ring1 id="ring1" class="ring1" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"/>
            </div>
            <div class="w-1/2 h-full flex flex-row sm:flex-col">
              <!-- ring 2 -->
              <div><Ring1 id="ring2" class="ring2" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              <!-- ring 3 -->
              <div><Ring1 id="ring3" class="ring3" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
            </div>
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
        <!-- postmark -->
        <div class="w-full sm:w-2/3 relative">
          <!-- ring message -->
          <div class="message absolute z-10 text-white w-1/2">
            {{ message }}
          </div>
          <Map class="absolute z-20 h-full w-full map" v-if="this.$route.name === 'Location' && showMenu"/>
          <iframe class="absolute z-20 h-full w-full"  v-if="this.$route.name === 'Certificates' && showMenu" src="/test.pdf" width="50%" height="100%"></iframe>
          <img
            alt="postmark"
            :src="require('@/assets/postmark.svg')"
            class="postmark relative"
          >
          <div v-if="this.$route.name === 'Certificates'">pdf
            <pdf src="https://www.africau.edu/images/default/sample.pdf"></pdf>
          </div>
        </div>
      </div>
      <div class="h-2/6">
        <!-- separator -->
        <div
          class="hidden sm:block bg-gray-500"
          v-bind:class="{ 'separator': showMenu, 'separator-hidden': !showMenu}"
        ></div>
        <!-- view -->
        <div class="bg-gray-300 view">
          <!-- rings 2 -->
          <div v-if="!showMenu" class="flex flex-col h-full sm:flex-row w-full">
            <div class="bg-gray-500 w-full h-1/2 sm:w-3/5 flex flex-row">
              <div class="ring4">
                <div><Ring1 id="ring4" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
              <div class="ring5">
                <div><Ring1 id="ring5" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
              <div class="ring6">
                <div><Ring1 id="ring6" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
            </div>
            <div class="bg-gray-400 w-full h-1/2 sm:w-2/5 flex flex-row">
              <div class="ring7">
                <div><Ring1 id="ring7" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
              <div class="ring8">
                <div><Ring1 id="ring8" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
              <div class="ring9 block sm:hidden">
                <div><Ring1 id="ring9" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              </div>
            </div>
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
import Map from './Map.vue'

export default {
  name: 'Canvas',
  components: { Ring1, Map },
  setup() {
    const showMenu = ref(false)
    const message = ref('')
    const displayCertificate = ref(false)
    displayCertificate.value = false

    const messages = {
      ring1: 'Ring 1 message this is a long long message you have there why not so long you see',
      ring2: 'Ring 2 message',
      ring3: 'Ring 3 message',
      ring4: 'Ring 4 message',
      ring5: 'Ring 5 message',
      ring6: 'Ring 6 message',
      ring7: 'Ring 8 message',
      ring8: 'Ring 8 message',
    }

    function mouseover(event) {
      const key = event.srcElement.id
      message.value = messages[key]
    }

    function mouseleave() {
      console.log('leave')
      message.value = ''
    }


    function emitValue() {
      showMenu.value = !showMenu.value
    }
    return {
      showMenu,
      emitValue,
      displayCertificate,
      messages,
      mouseover,
      mouseleave,
      message
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
.postmark {
  @apply h-full;
}
.map {
  padding: 5% 
}
.message {
  padding-top: 3%;
  padding-left: 3%;
  font-size: 2.4vh;
  text-shadow: 1px 1px #583003;
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
  color: #e97e04;
}
.ring {
  /* @apply ring-offset-0 cursor-pointer; */
}
.ring1 {
  margin-top: 40%;
  width: 90%;
}
.ring2 {
  width: 100%;
}
.ring3 {
  margin-top: 10%;
  margin-left: 30%;
  width: 70%;
}
.ring4 {
  margin-top: -20%;
  width: 46%;
}
.ring5 {
  width: 27%;
}
.ring6 {
  margin-top: 4%;
  margin-left: 4%;
  width: 20%;
}
.ring7 {
  width: 40%;
}
.ring8 {
  margin-top: 5%;
  margin-left: 4%;
  width: 30%;
}
.ring9 {
  margin-top: 2.3%;
  width: 13%;
}
</style>
