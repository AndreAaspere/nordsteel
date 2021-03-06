import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { createI18n } from 'vue-i18n'
import VueGtag from 'vue-gtag';

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

const i18n = createI18n({
  locale: navigator.language, // set locale
  // locale: 'est', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: loadLocaleMessages(), // set locale messages
})

createApp(App)
  .use(i18n)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDxA_6L9Gvw0LkDVfx6oq5-6ErOZniX3FQ',
    },
  })
  .use(VueGtag, {
    config: { id: "G-8574SXNVV2" }
  })
  .mount('#app')
