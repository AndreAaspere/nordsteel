<template>
  <div>
    <div class="h-full">
      <GMapMap
        class="h-full"
        :center="{lat: coordinates.lat, lng: coordinates.lng}"
        :zoom="17"
        map-type-id="roadmap"
        >
        <GMapMarker
          :key="marker.id"
          v-for="marker in markers"
          :position="marker.position"
        />   
      </GMapMap>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Map',
  setup() {
    const coordinates = {lat: 58.10681649396083, lng: 25.542487664000050}
    const center = {lat: 51.093048, lng: 6.9}
    const markers = [
        {
          id: 'marker',
          position: coordinates
        }
      ]
    return {
      coordinates,
      center,
      markers
    }
  }
}
</script>