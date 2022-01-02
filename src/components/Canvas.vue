<template>
  <div class="flex justify-center h-full canvas-parent select-none no-tap-hilight">
    <div class="canvas">
      <div class="h-30vw sm:h-15% flex flex-col sm:flex-row">
        <div class="h-2/3 sm:w-1/2 sm:h-full flex flex-col">
          <img alt="logo" class="w-1/2 pt-4% sm:pt-8% pl-4%" :src="require('@/assets/logo.svg')">
          <img alt="landscape" class="w-140vh pt-4vh hidden sm:block absolute" :src="require('@/assets/landscape.svg')">
          <img alt="landscapeMobile" class="w-full sm:w-full mt-8% absolute sm:hidden" :src="require('@/assets/landscapeMobile.svg')">
        </div>
        <div class="relative h-1/3 sm:w-1/2 sm:h-full z-10 flex justify-end">
          <svg v-on:click="openMenuClicked()" class="h-full sm:h-1/2 p-2% mr-10% text-gray-900 cursor-pointer hover:text-gray-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="sm:h-55% flex flex-col-reverse sm:flex-row">
        <div class="flex w-full sm:w-1/3">
          <!-- menu -->
          <!-- rings 1 -->
          <div v-if="displayRings" class="w-full flex flex-row">
            <div class="sm:w-1/2">
              <!-- ring 1 -->
              <Ring2 id="ring1" class="ring1 w-80% sm:w-0% sm:mt-70% ml-10% sm:ml-10%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"/>
            </div>
            <div class="sm:w-1/2 h-full flex flex-row sm:flex-col">
              <!-- ring 2 -->
              <div><Ring2 id="ring2" class="ring2 w-70% sm:w-90% ml-20% sm:ml-0 sm:mt-40%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
              <!-- ring 3 -->
              <div><Ring2 id="ring3" class="ring3 w-60% sm:w-55% sm:mt-10% ml-20% sm:ml-35%" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" /></div>
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
          <div v-if="displayRings" class="msg absolute z-10 w-full flex flex-col">
            <div v-bind:class="{
              'msg-header-hello': showPostcard && !mobileView,
              'msg-header-hello-mobile': showPostcard && mobileView,
              'msg-header': !showPostcard && !mobileView,
              'msg-header-mobile': !showPostcard && mobileView,
              }">{{ msgHeader }}</div>
            <div v-bind:class="{
              'msg-text-hello': showPostcard && !mobileView,
              'msg-text-hello-mobile': showPostcard && mobileView,
              'msg-text': !showPostcard && !mobileView,
              'msg-text-mobile': !showPostcard && mobileView,
              }">{{ msgText }}</div>
          </div>
          <Map
            class="absolute z-50 h-full w-full p-5%"
            v-if="this.$route.name === 'Location' &&  (displayMenu && !mobileView || mobileView && displayViews)"
            v-bind:class="{ 'map': !mobileView}"
          />
          <iframe
            class="absolute z-50 h-full w-full"
            v-if="this.$route.name === 'Certificates' &&  (displayMenu && !mobileView || mobileView && displayViews)"
            :src=fullPdfUrl
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>

          <img v-if="showPostcard"
            alt="postmark"
            :src="require('@/assets/postmarkLandscape.svg')"
            class="z-40 absolute h-full"
          >
          <img
            alt="postmark"
            :src="require('@/assets/postmarkEmpty.svg')"
            class="postmark relative h-full"
          >
        </div>
      </div>
      <div class="sm:h-30%">
        <!-- separator -->
        <div
          class="hidden sm:block h-3%"
          v-bind:class="{ 'bg-gradient-to-r from-ns-blue via-ns-green to-ns-blue': displayMenu, 'bg-white': !displayMenu}"
        ></div>
        <!-- view -->
        <div class="view sm:pt-0" v-bind:class="{'view-mobile': displayViews && mobileView}">
          <!-- rings 2 -->
          <div v-if="displayRings" class="flex flex-col h-full sm:flex-row w-full">
            <div class="w-full h-full sm:w-1/2 flex flex-row">
              <Ring2 class="ring4 ml-8% w-25% sm:w-43% sm:mt-min30% " id="ring4" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring5 w-40% sm:w-30% sm:ml-min4%" id="ring5" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring6 w-25% sm:w-20% sm:ml-3%" id="ring6" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
            </div>
            <div class="w-full h-full sm:w-1/2 flex flex-row">
              <Ring2 class="ring7 w-30% ml-5% sm:ml-3%" id="ring7" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring8 w-20% ml-5% sm:ml-3% sm:w-22%" id="ring8" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
              <Ring2 class="ring9 w-30% ml-5% sm:ml-3%" id="ring9" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" />
            </div>
          </div>
          <div v-if="displayViews && mobileView" class="cursor-pointer pl-80%" v-on:click="openMenuClicked()">>></div>
          <router-view v-if="displayViews"/>
        </div>
        <div class="bg-gradient-to-r from-ns-green to-ns-blue h-22%"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Ring2 from './Ring2.vue'
import Map from './Map.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Canvas',
  components: { Ring2, Map },
  setup() {
    const {t, locale} = useI18n({})

    const displayRings = ref(true)
    const displayMenu = ref(false)
    const displayViews = ref(false)
    const mobileView = ref(false)

    const pdfUrl = 'https://andreaaspere.github.io/nordsteel/test.pdf'
    const fullPdfUrl = `https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`

    onMounted(() => {
      mobileView.value = window.innerWidth < 640;

      window.addEventListener('resize', () => {
        mobileView.value = window.innerWidth < 640;
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
      dynamicActivate,
      msgHeader,
      msgText,
      showPostcard,
      menuItemClicked,
      mobileView,
      fullPdfUrl
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
  color: rgb(34, 34, 34);
}
.map {
  padding-right: 11%;
}
.msg-hello {

}
.msg {
  padding-top: 5%;
  padding-left: 8%;
  font-weight: bold;
  color: rgb(34, 34, 34);
}
.msg-header-hello {
  padding-left: 20%;
  font-size: 2.5vh;
}
.msg-header {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 3vh;
  padding-right: 17%;

}
.msg-header-hello-mobile {
  font-size: 4vw;
  padding-left: 25%;
}
.msg-header-mobile {
  font-size: 4vw;
  text-align: center;
  padding-right: 6%;
  padding-bottom: 3%;

}
.msg-text-hello {
  padding-right: 37%;
  margin-left: -2%;
  font-size: 1.9vh;
  line-height: 115%;
}
.msg-text {
  font-size: 2.1vh;
  padding-right: 17%;
  text-align: justify;
  /* word-break: break-all; */
}
.msg-text-hello-mobile {
  font-size: 2.5vw;
  padding-right: 40%;

}
.msg-text-mobile {
  font-size: 2.8vw;
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
.ring1 {
  transform: rotate(-40deg);
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
.ring2 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

}
.ring3 {
  transform: rotate(10deg);
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

}
.ring4 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

}
.ring5 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  transform: rotate(10deg);
}
.ring6 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  /* transform: rotate(50deg); */
}
.ring7 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  transform: rotate(10deg);
}
.ring8 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  transform: rotate(30deg);
}
.ring9 {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  transform: rotate(10deg);
}
</style>
