<template>
    <div class="bg-gray-200">
        <!-- PAGINAS 12 - 19 - 26 - 35 -->

        <div class="flex justify-between items-start">
            <div class="lg:flex lg:m-8 mr-4">
                <filtro-inmueble></filtro-inmueble>
            </div>

            <div class="m-8 ml-4">
                <w-card>
                    <div class="bg-gray-200 m-auto">
                        <div
                            class="flex lg:bg-white items-center justify-center lg:justify-between"
                        >
                            <div class="subtitle bold">Listado de Inmuebles</div>
                            <div class="hidden lg:flex">
                                <w-btn
                                    class="flex caption bold white-text items-center"
                                    :color="$wlinii.tertiary"
                                >
                                    BUSQUEDA DE MAPA
                                    <div class="pl-4">
                                        <w-icon class="bg-white" icon="map" h="24px"></w-icon>
                                    </div>
                                </w-btn>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white lg:hidden m-auto">
                        <div class="flex justify-center justify-around">
                            <w-btn
                                small
                                class="flex caption bold white-text items-center"
                                :color="$wlinii.tertiary"
                            >
                                VER MAPA
                                <!-- Falta icono -->
                                <div class="pl-4">
                                    <w-icon class="bg-white" icon="map" h="20px"></w-icon>
                                </div>
                            </w-btn>
                            <w-btn
                                small
                                class="flex caption bold white-text items-center"
                                :color="$wlinii.secondary"
                            >
                                FILTRAR
                                <w-icon class="pl-4" icon="bars-white" h="20px"></w-icon>
                            </w-btn>
                        </div>
                    </div>

                    <div class="bg-gray-200 lg:bg-white">
                        <div
                            class="flex-wrap lg:grid gap-4 grid-cols-3 justify-between items-center"
                        >
                            <div v-for="item in cards" :key="item.i">
                                <div class="my-8 lg:my-0">
                                    <w-card :image="item.image" :hover="'full-hover'">
                                        <template slot="image">
                                            <div>
                                                <p class="caption bold">BUILT-UP-65 SQ FT</p>
                                                <p class="caption bold">LAND SIZE-110 SQ FT</p>
                                                <br />
                                                <p class="caption">
                                                    Casa frente a un grande
                                                    parque con juegos para
                                                    niños, lugares para hacer
                                                    ejercicios y otros.
                                                </p>
                                                <div class="block lg:hidden">
                                                    <p class="caption bold secondary-text">
                                                        Agregado hace: 5 días
                                                        atras
                                                    </p>
                                                </div>
                                            </div>
                                        </template>

                                        <template slot="state">
                                            <p class="caption bold white-text">{{ item.tipo }}</p>
                                        </template>

                                        <div>
                                            <h1 class="caption bold">958 Calle montreal</h1>
                                            <p class="caption">Av.montreal</p>
                                            <div class="flex justify-between">
                                                <p class="caption">Comisión</p>
                                                <h1
                                                    v-if="
                                                        item.tipo == 'Alquiler'
                                                    "
                                                    class="flex caption justify-end"
                                                >MES</h1>
                                            </div>
                                            <div class="flex justify-between">
                                                <h1 class="body bold">5%</h1>
                                                <div>
                                                    <h1 class="body bold tertiary-text">S/ 86,723</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <template slot="footer">
                                            <div class="flex justify-between">
                                                <div class="info-item">
                                                    <w-icon icon="room-solid" h="12px"></w-icon>
                                                    <p class="caption white-text">3</p>
                                                </div>
                                                <div class="info-item">
                                                    <w-icon icon="bath-solid" h="12px"></w-icon>
                                                    <p class="caption white-text">3</p>
                                                </div>
                                                <div class="info-item">
                                                    <w-icon icon="parking-solid" h="12px"></w-icon>
                                                    <p class="caption white-text">3</p>
                                                </div>
                                                <div class="info-item">
                                                    <w-icon icon="size" h="12px"></w-icon>
                                                    <p class="caption white-text">120m</p>
                                                </div>
                                            </div>
                                        </template>
                                    </w-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </w-card>
            </div>
        </div>
    </div>
</template>

<script>
import FiltroInmueble from "./filtros/FiltroInmueble.vue";

export default {
    data: () => ({
        cards: [
            {
                tipo: "Alquiler",
                image: "/images/departamentos/1.jpg"
            },
            {
                tipo: "En Venta",
                image: "/images/departamentos/2.jpg"
            },
            {
                tipo: "Alquiler",
                image: "/images/departamentos/3.jpg"
            },
            {
                tipo: "En Venta",
                image: "/images/departamentos/4.jpg"
            }
        ]
    }),

    components: {
        FiltroInmueble
    }
};
</script>

<style></style>
