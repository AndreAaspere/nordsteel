<template>
  <div class="location flex flex-col sm:flex-row">
    <div class="sm:w-1/3">
    </div>
    <div class="sm:w-1/3 flex flex-col">
      <div class="font-bold">
        NordSteel OÜ
      </div>
      <div>
        {{ $t('views.contact.street') }}
      </div>
      <div>
        {{ $t('views.contact.county') }}
      </div>
      <div>
        {{ $t('views.contact.country') }}
      </div>
    </div>
    <div class="sm:w-1/3 flex flex-row marker justify-center sm:justify-start">
      <img alt="marker" :src="require('@/assets/marker.svg')">
      <button class="" onclick="location.href='https://goo.gl/maps/nGfNdDh9aFQLXMYq8'" type="button">
        show location
      </button>
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
  .marker {
    padding-top: 3.2vh;
  }
  .marker > img {
    height: 3.5vh;
    padding-right: 1vh;
  }
  button {
    height: 3.5vh;
  }
</style>