<template>
  <div>
    <h1>Mapa</h1>
    <div class="map-container">
      <gmap-map
        ref="mapRef"
        :center="center"
        :zoom="12"
        :options="mapOptions"
        style="width:100%;  height: 400px;"
      >
        <gmap-marker
          :key="index"
          :icon="markerOptions"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -27.583, lng: -60.717 },
      markers: [{ position: { lat: -27.576832, lng: -60.711363 } }],
      places: [],
      currentPlace: null,
      mapOptions: {
        mapTypeControl: false
      },

      markerOptions: {
        url: "images/key-hole.png",
        size: { width: 20, height: 35, f: "px", b: "px" },
        scaledSize: { width: 10, height: 20, f: "px", b: "px" }
      }
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
</style>
