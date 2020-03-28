<template>
    <div class="bg-gray-200">
        <!-- PAGINAS 12 - 19 - 26 - 35 -->

        <div class="flex justify-between items-start">
            <div>
                <filtro-inmueble></filtro-inmueble>
            </div>

            <div>
                <w-card>
                    <div class="bg-gray-200 m-auto">
                        <div
                            class="flex lg:bg-white items-center justify-center lg:justify-between"
                        >
                            <div class="subtitle bold">
                                Listado de Inmuebles
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
    components: {
        FiltroInmueble
    }
};
</script>

<style></style>
