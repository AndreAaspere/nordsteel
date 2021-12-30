<template>
  <div class="sm:h-screen ">
    <Canvas/>
  </div>
</template>

<script>
  import Canvas from './components/Canvas.vue'
  import VueI18n from 'vue-i18n'

  export default {
    components: {
      Canvas,
      // VueI18n
    }
    // setup() {
    //   const { t } = VueI18n.useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
    //   return { t } // return render context that included `t`
    // }
  }
</script>

<style src="./assets/tailwind.css">
</style>
