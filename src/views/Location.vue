<template>
  <div class="location flex flex-col sm:flex-row">
    <div class="sm:w-1/3">
    </div>
    <div class="sm:w-1/3 flex flex-col">
      <div class="font-bold">
        NordSteel OÜ
      </div>
      <div>
        Ettevõtluse 6, Karksi-Nuia, 69103
      </div>
      <div>
        Viljandimaa, Mulgi vald
      </div>
      <div>
        {{ $t('views.contact.country') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .location {
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 2.2vh;
  }
</style>