<template>
  <div class="flex justify-center h-full canvas-parent select-none no-tap-hilight">
    <div class="canvas">
      <div class="h-30vw sm:h-15% flex flex-col sm:flex-row">
        <div class="h-2/3 sm:w-1/2 sm:h-full flex flex-col">
          <img alt="logo" class="w-1/2 pt-4% sm:pt-8% pl-4%" :src="require('@/assets/logo.svg')">
          <img
            alt="landscape"
            class="w-140vh pt-4vh hidden sm:block absolute"
            v-bind:class="{
              'landscape': !mobileView && !resizeView,
            }"
            :src="require('@/assets/landscape.svg')"
          >
          <img alt="landscapeMobile" class="w-full sm:w-full mt-8% absolute sm:hidden" :src="require('@/assets/landscapeMobile.svg')">
        </div>
        <div class="relative h-1/3 sm:w-1/2 sm:h-full z-40 flex justify-end">
           <!-- langmenu -->
          <div class="flex mt-2% h-full sm:h-1/3" v-bind:class="{ 'langmenu': !mobileView, 'langmenu-mobile': mobileView}">
            <button class="h-full">
              <svg v-on:click="openMenuClicked()" class="hamburger h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <button :class="locale === 'et' ? 'lang-active' : ''" v-on:click="langMenuClicked('et')">Est</button>
            <button :class="locale === 'en' ? 'lang-active' : ''" v-on:click="langMenuClicked('en')">Eng</button>
            <button :class="locale === 'sv' ? 'lang-active' : ''" v-on:click="langMenuClicked('sv')">Swe</button>
            <button :class="locale === 'ru' ? 'lang-active' : ''" v-on:click="langMenuClicked('ru')">Rus</button>
            <button :class="locale === 'fi' ? 'lang-active' : ''" v-on:click="langMenuClicked('fi')">Fin</button>
          </div>
        </div>
      </div>
      <div class="sm:h-55% flex flex-col-reverse sm:flex-row">
        <div class="flex w-full sm:w-1/3">
          <!-- menu -->
          <!-- rings 1 -->
          <div v-if="displayRings" class="w-full flex flex-row">
            <div class="sm:w-1/2">
              <!-- ring 1 -->
              <Ring2 id="ring1" class="ring ring1 w-80% sm:w-0% sm:mt-70% ml-10% sm:ml-10%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"/>
            </div>
            <div class="sm:w-1/2 h-full flex flex-row sm:flex-col">
              <!-- ring 2 -->
              <div><Ring2 id="ring2" class="ring ring2 w-70% sm:w-90% ml-20% sm:ml-0 sm:mt-40%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              <!-- ring 3 -->
              <div><Ring2 id="ring3" class="ring ring3 w-60% sm:w-55% sm:mt-10% ml-20% sm:ml-35%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
            </div>
          </div>
          <div v-if="!displayRings && mobileView" class="absolute w-full h-2 mt-2 bg-gradient-to-r from-ns-blue via-ns-green to-ns-blue"></div>
          <div
            v-if="displayMenu"
            v-bind:class="{
              'menu': !mobileView,
              'menu-mobile': mobileView
            }"
            id="nav"
            class="flex flex-col"
          >
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/about">{{$t('nav.about')}}</router-link>
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/contact">{{$t('nav.contact')}}</router-link>
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/location">{{$t('nav.location')}}</router-link>
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/certificates">{{$t('nav.certificates')}}</router-link>
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/team">{{$t('nav.team')}}</router-link>
            <router-link v-on:click="menuItemClicked()" class="nav-link" to="/vacancy">{{$t('nav.vacancy')}}</router-link>
            <router-link v-on:click="openMenuClicked()" class="nav-link" to="/">>></router-link>
          </div>
        </div>
        <!-- postmark -->
        <div class="w-full sm:w-2/3 relative">
          <!-- ring message -->
          <div
            v-if="displayRings"
            class="msg absolute z-10 w-full flex flex-col"
            v-bind:class="{
              'text-resize': !mobileView && resizeView,
            }"
          >
            <div v-bind:class="{
              'msg-header-hello': showPostcard && !mobileView,
              'msg-header-hello-mobile': showPostcard && mobileView,
              'msg-header-hello-resize': showPostcard && resizeView && !mobileView,
              'msg-header': !showPostcard && !mobileView,
              'msg-header-mobile': !showPostcard && mobileView,
              'msg-header-resize': !showPostcard && resizeView && !mobileView,
              }">{{ msgHeader }}</div>
            <div v-bind:class="{
              'msg-text-hello': showPostcard && !mobileView,
              'msg-text-hello-mobile': showPostcard && mobileView,
              'msg-text-hello-resize': showPostcard && resizeView && !mobileView,
              'msg-text': !showPostcard && !mobileView,
              'msg-text-mobile': !showPostcard && mobileView,
              'msg-text-resize': !showPostcard && resizeView && !mobileView,
              }">{{ msgText }}</div>
          </div>
        <iframe
          v-if="this.$route.name === 'Location' &&  (displayMenu && !mobileView || mobileView && displayViews)"
          class="p-5% sm:pr-12% absolute z-50 iframe-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.2891489003264!2d25.541022987760506!3d58.10637518233712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ec83e3750789e7%3A0x966fb42dde276f15!2sNordsteel%20O%C3%9C!5e0!3m2!1sen!2see!4v1642237741553!5m2!1sen!2see"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
          <div class="" v-if="this.$route.name === 'Certificates' &&  (displayMenu && !mobileView || mobileView && displayViews)">
            <div
              class="absolute z-50 bg-blue-400 pdf1"
              v-bind:class="{
                'pdf1': !mobileView,
                'pdf1-mobile': mobileView,
                'pdf1-resize': resizeView && !mobileView,
              }"
            >
              <iframe
                :src=fullCertFiUrl
                frameborder="0"
                height="100%"
                width="100%"
              ></iframe>
            </div>
            <div
              class="absolute z-50 bg-blue-400 pdf2"
              v-bind:class="{
                'pdf2': !mobileView,
                'pdf2-mobile': mobileView,
                'pdf2-resize': resizeView && !mobileView,
              }"
            >
              <iframe
                :src=fullCertEnUrl
                frameborder="0"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          <img v-if="showPostcard && this.$route.name !== 'Certificates' && this.$route.name !== 'Location'"
            alt="postmark"
            :src="require('@/assets/postmarkLandscape.svg')"
            class="z-40 absolute"
            v-bind:class="{
              'h-full': !resizeView || resizeView && mobileView,
              'w-full': resizeView && !mobileView,
              }"
          >
          <img
            alt="postmark"
            :src="require('@/assets/postmarkEmpty.svg')"
            class="postmark relative"
            v-bind:class="{
              'h-auto': resizeView && !mobileView,
              'h-full': !resizeView && !mobileView,
              }"
          >
        </div>
      </div>
      <div class="sm:h-30%">
        <!-- separator -->
        <div
          class="hidden sm:block h-3%"
          v-bind:class="{
            'bg-gradient-to-r from-ns-blue via-ns-green to-ns-blue': displayMenu,
            'bg-white': !displayMenu,
            'stretch': !mobileView && !resizeView,
            }"
        ></div>
        <!-- view -->
        <div class="view sm:pt-0" v-bind:class="{'view-mobile': displayViews && mobileView}">
          <!-- rings 2 -->
          <div v-if="displayRings" class="flex flex-col h-full sm:flex-row w-full">
            <div class="w-full sm:w-1/2 flex flex-row">
              <Ring2
                id="ring4"
                class="ring ring4 ml-5% mt-0 w-25% sm:h-30vh sm:w-30vh sm:mt-min18vh sm:ml-3vh relative sm:absolute"
                v-bind:class="{
                  'ring4-resize': !mobileView && resizeView,
                }"
                v-on:mouseover="mouseover"
                v-on:mouseleave="mouseleave" 
              />
              <Ring2 class="ring ring5 sm:ml-40% w-38%" id="ring5" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring ring6 h-80% w-25% mt-4% sm:ml-min2%" id="ring6" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
            </div>
            <div class="w-full h-full sm:w-1/2 flex flex-row">
              <Ring2 class="ring ring7 w-30% ml-5% sm:ml-3%" id="ring7" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring ring8 w-20% ml-5% sm:ml-3% sm:w-22%" id="ring8" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring ring9 w-30% ml-5% sm:ml-3%" id="ring9" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
            </div>
          </div>
          <div v-if="displayViews && mobileView" class="cursor-pointer pl-80%" v-on:click="openMenuClicked()">>></div>
          <router-view v-if="displayViews"/>
        </div>
        <div
          class="bg-gradient-to-r from-ns-green to-ns-blue h-22% hidden sm:block"
          v-bind:class="{
              'stretch': !mobileView && !resizeView,
              }"
        >
          <div class="footer">
            made by Mineralstones OÜ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Ring2 from './Ring2.vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Canvas',
  components: { Ring2 },
  setup() {
    const {t, locale} = useI18n({})

    const displayRings = ref(true)
    const displayMenu = ref(false)
    const displayViews = ref(false)
    const mobileView = ref(false)
    const resizeView = ref(false)
    const router = useRouter()
    const route = useRoute()

    const certFiUrl = 'https://nordsteel.ee/certificates/11994-01fi.pdf'
    const fullCertFiUrl = `https://docs.google.com/viewer?url=${certFiUrl}&embedded=true`
    const certEnUrl = 'https://nordsteel.ee/certificates/11994-01en.pdf'
    const fullCertEnUrl = `https://docs.google.com/viewer?url=${certEnUrl}&embedded=true`

    const initialRatio = window.innerWidth/window.innerHeight;
    resizeView.value = initialRatio < 1.4;

    onMounted(async () => {
      // get geolocation is possible (no adblocks)
      const availableCountryCodes = {
        et: 'EE',
        ru: 'RU',
        fi: 'FI',
        se: 'SE',
        en: 'GB',
      }
      fetch("https://api.db-ip.com/v2/free/self")
        .then(response => response.json())
        .then(data => {
          const index = Object.values(availableCountryCodes).indexOf(data.countryCode)
          if(Object.values(availableCountryCodes).indexOf(data.countryCode) > -1) {
            langMenuClicked(Object.keys(availableCountryCodes)[0])
          }
        });

      await router.isReady()

      if (route.path !== '/') {
        displayRings.value = false
        displayMenu.value = true
        displayViews.value = true
      }

      mobileView.value = window.innerWidth < 640;

      window.addEventListener('resize', () => {
        mobileView.value = window.innerWidth < 640;
        const changerRatio = window.innerWidth/window.innerHeight;
        resizeView.value = changerRatio < 1.4;

        if (mobileView.value) {
          displayRings.value = true
          displayMenu.value = false
          displayViews.value = false
        }
      })
    })
  
    const showPostcard = ref(true)

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




    function langMenuClicked(lang) {
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

      showPostcard.value = false
      msgHeader.value = rawMessages[key+'Header']
      msgText.value = rawMessages[key+'Text']
    }

    function mouseleave() {
      const rawMessages = {...messages.value};

      showPostcard.value = true
      msgHeader.value = rawMessages.homeHeader
      msgText.value = rawMessages.homeText
    }

    function openMenuClicked() {
      if (mobileView.value) {
        if (displayViews.value) {
          displayMenu.value = true
          displayViews.value = false
        } else {
          if(displayRings.value) {
            displayRings.value = false
            displayMenu.value = true
          } else {
            displayRings.value = true
            displayMenu.value = false
          }
        }
      }

      if (!mobileView.value) {
        displayRings.value = !displayRings.value
        displayMenu.value = !displayMenu.value
        displayViews.value = !displayViews.value
      }
    }

    function menuItemClicked() {
      if (mobileView.value) {
        displayMenu.value = false
        displayViews.value = true
      }
    }

    return {
      displayRings,
      displayMenu,
      displayViews,
      openMenuClicked,
      mouseover,
      mouseleave,
      langMenuClicked,
      msgHeader,
      msgText,
      showPostcard,
      menuItemClicked,
      mobileView,
      fullCertFiUrl,
      fullCertEnUrl,
      resizeView,
      locale
    }
  }
}
</script>

<style scoped>
.pdf1 {
  width: 37%;
  height: 79%;
  margin-top: 6%;
  margin-left: 7%;
}
.pdf1-resize {
  width: 40%;
  height: 34vw;
  margin-top: 6%;
  margin-left: 8%;
}
.pdf1-mobile {
  width: 40%;
  height: 80%;
  margin-top: 6%;
  margin-left: 8%;
}
.pdf2 {
  width: 37%;
  height: 79%;
  margin-top: 6%;
  margin-left: 49%;
}
.pdf2-resize {
  width: 40%;
  height: 34vw;
  margin-top: 6%;
  margin-left: 53%;
}
.pdf2-mobile {
  width: 40%;
  height: 80%;
  margin-top: 6%;
  margin-left: 53%;
}
.iframe-map {
  width: 100%;
  height: 100%;
}
.langmenu-mobile > button {
  font-size: 3.6vw;
  padding-right: 2vw;
}
.langmenu > button {
  padding-right: 0.6vh;
  font-size: 2.2vh;
  color: rgb(34, 34, 34);
}
.langmenu .hamburger {
  margin-top: -0.2vh;
  margin-right: 2vh;
  height: 3.8vh;
}
.langmenu-mobile .hamburger {
  margin-top: -0.3vw;
  margin-right: 2vw;
  height: 6vw;
}
.langmenu > button:hover {
  color: rgb(110, 110, 110);
}
.lang-active {
  text-decoration: underline;
}
.landscape {
  margin-left: calc(0px - (50vw - 70vh));
  width: 100%;
  height: 25vh;
  z-index: -9998;
}
.stretch {
  margin-left: calc(0px - (50vw - 70vh));
  margin-right: calc(0px - (50vw - 70vh));
}
.canvas-parent {
  font-family: Verdana, sans-serif;
}
.canvas {
  width: 140vh;
  color: rgb(34, 34, 34);
}
.map {
  padding-right: 11%;
}
.msg {
  padding-top: 5%;
  padding-left: 8%;
  font-weight: normal;
  color: rgb(34, 34, 34);
}

.msg-header-hello {
  font-weight: bold;
  padding-left: 20%;
  font-size: 2.5vh;
}
.msg-header-hello-mobile {
  font-size: 4vw;
  padding-left: 25%;
  font-weight: bold;
}
.msg-header-hello-resize {
  font-size: 2.3vw;
  padding-left: 20%;
  font-weight: bold;
}
.msg-header {
  font-weight: bold;
  text-align: center;
  padding-top: 5%;
  padding-bottom: 2%;
  font-size: 3vh;
  padding-right: 17%;
}
.msg-header-mobile {
  font-size: 4vw;
  text-align: center;
  padding-right: 6%;
  padding-bottom: 3%;
}
.msg-header-resize {
  font-size: 2vw;
  text-align: center;
  padding-right: 6%;
  padding-bottom: 3%;
}
.msg-text-hello {
  padding-right: 40%;
  margin-left: -2%;
  font-size: 2.1vh;
  line-height: 115%;
}
.msg-text-hello-mobile {
  font-size: 2.5vw;
  padding-right: 40%;
}
.msg-text-hello-resize {
  font-size: 1.5vw;
  padding-right: 40%;
}
.msg-text {
  font-size: 2.1vh;
  padding-right: 17%;
  text-align: justify;
}
.msg-text-mobile {
  font-size: 2.5vw;
  padding-right: 6%;
  text-align: justify;
}
.msg-text-resize {
  font-size: 1.5vw;
  padding-right: 6%;
  text-align: justify;
}
.view {
  height: 75%;
}
.view-mobile {
  padding-top: 8%;
  text-align: center;
}
.menu {
  padding: 15%;
  padding-top: 35%;
  font-size: 1.7vh;
  font-weight: bold;
}
.nav-link {
  padding-bottom: 2%;
  color: rgb(54, 54, 54);;
}
.menu-mobile {
  padding-left: 30%;
  padding-top: 10%;
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #e97e04;
}
.no-tap-hilight {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.postmark {
  filter: drop-shadow(0px 0px 8px rgb(0 0 0 / 0.8));
}
.text-resize {
  z-index: 60;
  font-size: 1.7vw;
}
.ring1 {
  --c: -40deg;
  transform: rotate(var(--c));
}
.ring2 {
  --c: 0deg;
}
.ring3 {
  --c: 10deg;
  transform: rotate(var(--c));
}
.ring4-resize {
  width: 20vw;
}
.ring4 {
  --c: 0deg;
}
.ring5 {
  --c: 10deg;
  transform: rotate(var(--c));
}
.ring6 {
  --c: 50deg;
  transform: rotate(var(--c));
}
.ring7 {
  --c: 10deg;
  transform: rotate(var(--c));
}
.ring8 {
  --c: 30deg;
  transform: rotate(var(--c));
}
.ring9 {
  --c: 10deg;
  transform: rotate(var(--c));
}
.ring {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  --tw-ring-color: rgba(0, 0, 0, 0);
}
.ring:hover {
  -webkit-animation: rotation 1.2s infinite linear;
  -moz-animation: rotation 1.2s infinite linear;
  animation: rotation 1.2s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(var(--c));
    -webkit-transform: rotate(var(--c));
    -moz-transform: rotate(var(--c));
  }
  to {
    transform: rotate(calc(360deg + var(--c)));
    -webkit-transform: rotate(calc(360deg + var(--c)));
    -moz-transform: rotate(calc(360deg + var(--c)));
  }
}
.footer {
  padding-top:2vh;
  padding-right:10vh;
  font-size:2vh;
  color: #e97e04;
  text-align: center;
}
</style>
