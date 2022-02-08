<template>
  <div
    class="contact flex flex-col sm:flex-row"
    v-bind:class="{
      'fontsize-normal': !view.resizeView,
      'fontsize-resize': view.resizeView && !view.mobileView,
    }"
  >
    <div class="sm:w-1/4 flex flex-col pb-5% sm:pb-0">
      <div class="font-bold flex justify-center">
        {{$t('views.team.kuido')}}
      </div>
      <div class="flex justify-center">
        {{$t('views.team.productionmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: kuido@nordsteel.ee">kuido@nordsteel.ee</a>
      <a class="flex justify-center" href="tel: +372 56232676"> +372 56232676</a>
    </div>
    <div class="sm:w-1/4 flex flex-col pb-5% sm:pb-0">
      <div class="font-bold flex justify-center">
        {{$t('views.team.tarmo')}}
      </div>
      <div class="flex justify-center text-center">
        {{$t('views.team.develpomentmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: tarmo@nordsteel.ee">tarmo@nordsteel.ee</a>
      <a class="flex justify-center" href="tel: +372 56891936">+372 56891936</a>
    </div>
    <div class="sm:w-1/4 flex pb-5% flex-col">
      <div class="font-bold flex justify-center">
        {{$t('views.team.johannes')}}
      </div>
      <div class="flex justify-center">
        {{$t('views.team.projectmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: johannes@nordsteel.ee">johannes@nordsteel.ee</a>
      <a class="flex justify-center" href="tel:+372 53472816">+372 53472816</a>
    </div>
    <div class="sm:w-1/4 flex pb-5% flex-col">
      <div class="font-bold flex justify-center">
        {{$t('views.team.mati')}}
      </div>
      <div class="flex justify-center">
        {{$t('views.team.salesmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: mati@nordsteel.ee">mati@nordsteel.ee</a>
      <a class="flex justify-center" href="tel:+358 468418046">+358 468418046</a>
      <a class="flex justify-center" href="tel:+372 55532235">+372 55532235</a>
    </div>
  </div>
</template>

<style scoped>
  .contact {
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  .fontsize-normal {
    font-size: 2.2vh;
  }
  .fontsize-resize {
    font-size: 1.5vw;
  }
</style>

<script>
export default {
  name: 'Team',
  props: {
    view: {
      default: "false"
    }
  }
}
</script>
