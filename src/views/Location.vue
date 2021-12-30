<template>
  <div class="location flex">
    <div class="w-1/3">
    </div>
    <div class="w-1/3 flex flex-col">
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
    <div class="w-1/3 flex flex-col">
      <a href = "mailto: info@nordsteel.ee">info@nordsteel.ee</a>
      <a href="tel:+372 56232676">+372 56232676</a>
      <div>
        {{ $t('views.contact.accounting') }}
      </div>
      <a href = "mailto: arved@nordsteel.ee">arved@nordsteel.ee</a>
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