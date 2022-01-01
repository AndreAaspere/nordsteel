<template>
  <div class="contact flex flex-col sm:flex-row">
    <div class="sm:w-1/3 flex flex-col pb-5% sm:pb-0">
      <div class="font-bold flex justify-center">
        Kuido Kasak
      </div>
      <div class="flex justify-center">
        {{$t('views.team.productionmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: kuido@nordsteel.ee">kuido@nordsteel.ee</a>
      <a class="flex justify-center" href="tel: +372 56232676"> +372 56232676</a>
    </div>
    <div class="sm:w-1/3 flex flex-col pb-5% sm:pb-0">
      <div class="font-bold flex justify-center">
        Tarmo Soots
      </div>
      <div class="flex justify-center">
        {{$t('views.team.develpomentmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: tarmo@nordsteel.ee">tarmo@nordsteel.ee</a>
      <a class="flex justify-center" href="tel: +372 56891936">+372 56891936</a>
    </div>
    <div class="sm:w-1/3 flex flex-col">
      <div class="font-bold flex justify-center">
        Johannes Kasak
      </div>
      <div class="flex justify-center">
        {{$t('views.team.projectmanager')}}
      </div>
      <a class="flex justify-center" href = "mailto: johannes@nordsteel.ee">johannes@nordsteel.ee</a>
      <a class="flex justify-center" href="tel:+372 53472816">+372 53472816</a>
    </div>
  </div>
</template>

<style scoped>
  .contact {
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 2.2vh;
  }
</style>