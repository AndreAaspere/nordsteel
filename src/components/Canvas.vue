<template>
  <div class="flex justify-center bg-gray-50 h-full canvas-parent">
    <div class="canvas">
      <div class="h-30vw sm:h-1/6 flex flex-col sm:flex-row">
        <div class="h-2/3 sm:w-1/2 sm:h-full flex flex-col">
          <img alt="logo" class="w-1/2 pt-4% pl-4%" :src="require('@/assets/logo.svg')">
          <img alt="landscape" class="w-140vh pt-6vh hidden sm:block absolute" :src="require('@/assets/landscape.svg')">
          <img alt="landscapeMobile" class="w-full sm:w-full mt-8% absolute sm:hidden" :src="require('@/assets/landscapeMobile.svg')">
        </div>
        <div class="h-1/3 sm:w-1/2 sm:h-full z-10">
          <svg v-on:click="emitValue()" class="h-full sm:h-1/2 p-2% mr-10% text-gray-900 cursor-pointer hover:text-gray-600 float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <!-- <div class="bg-blue-200 w-full h-1/2 sm:h-1/2 sm:h-full sm:w-1/3 sm:pt-3% sm:pl-3%"> -->
          <!-- <img alt="logo" class="h-1/3 sm:w-full mt-5% ml-5% z-10" :src="require('@/assets/logo.svg')"> -->
          <!-- <img alt="logo" class="z-30 " :src="require('@/assets/maastik.svg')"> -->
        <!-- </div> -->
        <!-- <div class="bg-blue-400 sm:w-2/3 h-1/2 sm:h-1/2  w-full flex justify-end"> -->
          <!-- <svg v-on:click="emitValue()" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg> -->
          <!-- lang switcher -->
            <!-- <button class="p-[2%]" v-on:click="dynamicActivate('est')">Est</button>
            <button class="p-[2%]" v-on:click="dynamicActivate('en')">Eng</button> -->
        <!-- </div> -->
      </div>
      <div class="bg-gray-200 sm:h-3/6 flex flex-col-reverse sm:flex-row">
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
            <router-link class="nav-link" to="/about">{{$t('nav.about')}}</router-link>
            <router-link class="nav-link" to="/contact">{{$t('nav.contact')}}</router-link>
            <router-link class="nav-link" to="/location">{{$t('nav.location')}}</router-link>
            <router-link class="nav-link" to="/certificates">{{$t('nav.certificates')}}</router-link>
            <router-link class="nav-link" to="/team">{{$t('nav.team')}}</router-link>
            <router-link class="nav-link" to="/vacancy">{{$t('nav.vacancy')}}</router-link>
            <router-link v-on:click="emitValue()" class="nav-link" to="/">>></router-link>
          </div>
        </div>
        <!-- postmark -->
        <div class="w-full sm:w-2/3 relative">
          <!-- ring message -->
          <div class="message absolute z-10 text-white w-full flex flex-col">
            <div class="message-header">{{ msgHeader }}</div>
            <div>{{ msgText }}</div>
          </div>
          <Map class="absolute z-20 h-full w-full map" v-if="this.$route.name === 'Location' && showMenu"/>
          <iframe class="absolute z-20 h-full w-full"  v-if="this.$route.name === 'Certificates' && showMenu" src="/test.pdf" width="50%" height="100%"></iframe>
          <img
            alt="postmark"
            :src="require('@/assets/postmark.svg')"
            class="postmark relative"
          >
        </div>
      </div>
      <div class="sm:h-2/6">
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
import { ref, reactive } from 'vue';
import Ring1 from './Ring1.vue'
import Map from './Map.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Canvas',
  components: { Ring1, Map },
  setup() {
    const {t, locale} = useI18n({})

    const showMenu = ref(false)
    const displayCertificate = ref(false)
    displayCertificate.value = false

    function getTranslatedMessages() {
      const messageObj = {
        ring1Header: t('rings.ring1.header'),
        ring1Text: t('rings.ring1.text'),
        ring2Header: t('rings.ring2.header'),
        ring2Text: t('rings.ring2.text'),
        ring3Header: t('rings.ring3.header'),
        ring3Text: t('rings.ring3.text'),
        ring4Header: t('rings.ring4.header'),
        ring4Text: t('rings.ring4.text'),
        ring5Header: t('rings.ring5.header'),
        ring5Text: t('rings.ring5.text'),
        ring6Header: t('rings.ring6.header'),
        ring6Text: t('rings.ring6.text'),
        ring7Header: t('rings.ring7.header'),
        ring7Text: t('rings.ring7.text'),
        ring8Header: t('rings.ring8.header'),
        ring8Text: t('rings.ring8.text'),
        ring9Header: t('rings.ring9.header'),
        ring9Text: t('rings.ring9.text'),
        homeHeader: t('rings.home.header'),
        homeText: t('rings.home.text'),
      }
      return messageObj
    }

    let defaultTranslations = getTranslatedMessages()
    let messages = ref(defaultTranslations)

    function dynamicActivate(lang) {
      locale.value = lang
      const translatedMessages = getTranslatedMessages()
      messages.value = translatedMessages
      msgHeader.value = translatedMessages.homeHeader
      msgText.value = translatedMessages.homeText
    }

    const msgHeader = ref(defaultTranslations.homeHeader)
    const msgText = ref(defaultTranslations.homeText)

    function mouseover(event) {
      const key = event.srcElement.id
      const rawMessages = {...messages.value};

      msgHeader.value = rawMessages[key+'Header']
      msgText.value = rawMessages[key+'Text']
    }

    function mouseleave() {
      const rawMessages = {...messages.value};

      msgHeader.value = rawMessages.homeHeader
      msgText.value = rawMessages.homeText
    }

    function emitValue() {
      showMenu.value = !showMenu.value
    }

    return {
      showMenu,
      emitValue,
      displayCertificate,
      mouseover,
      mouseleave,
      dynamicActivate,
      msgHeader,
      msgText
    }
}
}
</script>

<style scoped>
.canvas-parent {
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
  padding-top: 3%;
  padding-left: 3%;
}
.menuicon {
  @apply text-gray-800 cursor-pointer z-40 hover:text-gray-500;
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
