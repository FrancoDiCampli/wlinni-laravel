<template>
    <div>
        <div>
            <gmap-autocomplete class="form-control" @place_changed="setPlace">
            </gmap-autocomplete>
            <w-btn @click="addMarker" dark rounded small>
                Agregar
            </w-btn>
        </div>
        <gmap-map
            ref="mapRef"
            :center="center"
            :zoom="14"
            :options="mapOptions"
            style="width: 100%; height: 600px;"
        >
            <gmap-marker
                :icon="markerOptions"
                :position="marker.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    props: {
        center: Object,
    },
    data: () => ({
        marker: {},
        mapOptions: {
            mapTypeControl: false,
        },
        places: [],
        currentPlace: null,
        // iconos de los marcadores
        markerOptions: {
            url: "/images/lock.png",
            size: { width: 20, height: 35, f: "px", b: "px" },
            scaledSize: { width: 15, height: 25, f: "px", b: "px" },
        },

        infoWindowPos: {
            lat: 0,
            lng: 0,
        },
        infoWinOpen: false,

        infoOptions: {
            pixelOffset: {
                width: 0,
                height: -35,
            },
        },
        card: {},
    }),
    mounted() {
        this.geolocate();
    },

    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng(),
                };
                this.marker = { position: marker };
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition((position) => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },
    },
};
</script>

<style></style>
