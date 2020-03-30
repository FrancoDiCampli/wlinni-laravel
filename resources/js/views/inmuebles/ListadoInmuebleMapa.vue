<template>
    <!-- PENDIENTE -->
    <div class="bg-gray-200">
        <!-- PAGINAS 30 -->

        <div class="flex justify-between items-start">
            <div class="hidden lg:flex m-8">
                <filtro-mapa></filtro-mapa>
            </div>

            <div class="container m-8">
                <div class="rounded-lg shadow-lg">
                    <div class="bg-gray-200">
                        <div
                            class="flex lg:bg-white items-center justify-center lg:justify-between p-8"
                        >
                            <div class="subtitle bold">
                                Listado de Inmuebles
                            </div>
                        </div>
                    </div>

                    <!-- editar el icono -->
                    <GoogleMap
                        :latitude="latitude"
                        :longitude="longitude"
                        :apiKey="apiKey"
                        :zoom="12"
                        with-marker
                        :locations="locations"
                        icon="../components/wlinii_components/iconos/lock.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FiltroMapa from "./filtros/FiltrosMapa.vue";
import GoogleMap from "vue-maps";

export default {
    data() {
        return {
            latitude: -12.1122095,
            longitude: -77.047945,
            apiKey: "AIzaSyAXlj8mkvRRg6KTVesim7xcM8CcceMfcAc",
            locations: [
                {
                    title: "Miraflores",
                    latitude: -12.1221005,
                    longitude: -77.0315953
                },
                {
                    title: "San Isidro",
                    latitude: -12.1001099,
                    longitude: -77.0554858
                },
                {
                    title: "Santiago de Surco",
                    latitude: -12.1206998,
                    longitude: -77.0347257
                }
            ]
        };
    },
    components: {
        FiltroMapa,
        GoogleMap
    }
};
</script>

<style></style>
