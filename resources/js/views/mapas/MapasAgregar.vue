<template>
    <div>
        <div class="hide">
            <div class id="myAutocomplete">
                <gmap-autocomplete class="my-4" @place_changed="setPlace"></gmap-autocomplete>
                <w-btn dark rounded small @click="addMarker">ADD</w-btn>
            </div>
        </div>
        <gmap-map
            ref="mapRef"
            :center="centro"
            :zoom="14"
            :options="mapOptions"
            style="width: 100%; height: 600px;"
        >
            <gmap-marker :icon="markerOptions" :position="marker.position"></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    props: {
        center: Object
    },
    data: () => ({
        cent: {},
        marker: {},
        mapOptions: {
            mapTypeControl: false
        },
        places: [],
        currentPlace: null,
        // iconos de los marcadores
        markerOptions: {
            url: "/images/lock.png",
            size: { width: 20, height: 35, f: "px", b: "px" },
            scaledSize: { width: 15, height: 25, f: "px", b: "px" }
        },

        infoWindowPos: {
            lat: 0,
            lng: 0
        },
        infoWinOpen: false,

        infoOptions: {
            pixelOffset: {
                width: 0,
                height: -35
            }
        },
        card: {}
    }),
    computed: {
        centro() {
            return this.center;
        }
    },
    mounted() {
        this.geolocate();
        this.$refs.mapRef.$mapPromise.then(map => {
            var myControl = document.getElementById("myAutocomplete");

            myControl.index = 1; // Esto es importante sino arroja error.

            map.controls[google.maps.ControlPosition.TOP_CENTER].push(
                myControl
            );
        });
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
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.marker = { position: marker };
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

<style></style>
