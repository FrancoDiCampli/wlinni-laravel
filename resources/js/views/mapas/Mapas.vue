<template>
    <div>
        <gmap-map
            ref="mapRef"
            :center="center"
            :zoom="12"
            :options="mapOptions"
            style="width: 100%; height: 600px;"
        >
            <gmap-marker
                :key="index"
                :icon="markerOptions"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="toggleInfoWindow(m, index)"
            ></gmap-marker>
            <gmap-info-window
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
            >
                <w-card
                    :image="card.image"
                    style="width: 250px;"
                    :shadow="false"
                >
                    <div class="caption">
                        <p class="bold">Desde</p>
                        <h1 class="body tertiary-text bold">
                            {{ card.precio }}
                        </h1>
                        <p class="">{{ card.dir }}</p>
                        <p class="bold">
                            {{ card.description }}
                        </p>
                        <div class="flex xxs justify-between mt-2">
                            <p>{{ card.entrega }}</p>
                            <p>{{ card.condicion }}</p>
                        </div>
                    </div>

                    <w-btn fullwidth dark rounded>Contactar</w-btn>
                </w-card>
            </gmap-info-window>
        </gmap-map>
    </div>
</template>

<script>
export default {
    props: {
        markers: Array,
        center: Object,
    },
    data: () => ({
        mapOptions: {
            mapTypeControl: false,
        },
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
    methods: {
        toggleInfoWindow: function (marker, idx) {
            this.infoWindowPos = marker.position;
            this.card = marker;
            this.infoWinOpen = !this.infoWinOpen;
        },
    },
};
</script>

<style></style>
