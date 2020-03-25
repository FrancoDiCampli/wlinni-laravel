<template>
    <div>
        <!-- PAGINAS 8 - 14 - 25 - 56 -->

        <div class="flex justify-around items-start lg:px-12">
            <div class="hidden lg:flex">
                <!-- Desplegable -->
                <div class="w-64 rounded-lg overflow-hidden shadow-lg">
                    <div class="flex justify-between items-center primary lg:secondary">
                        <p class="text-white p-2 pl-4">ORDENAR POR</p>
                        <!-- Falta icono -->
                        <h1 class="text-white pr-4 lg:hidden">X</h1>
                    </div>

                    <div class="justify-center p-4">
                        <div>
                            <div class="flex justify-between p-2">
                                <li class="block font-bold text-sm">OPERACIONES</li>
                                <w-icon icon="arrow-up" h="24px"></w-icon>
                            </div>
                            <div id="operaciones" class="bg-gray-200 p-4">
                                <ul>
                                    <li>
                                        <a href>Venta</a>
                                    </li>
                                    <li>
                                        <a href>Alquiler</a>
                                    </li>
                                    <li>
                                        <a href>Traspaso</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="border-b-2 border-gray-500" />
                        </div>

                        <div>
                            <div class="flex justify-between p-2">
                                <li class="block font-bold text-sm">PUBLICACIONES</li>
                                <w-icon icon="arrow-down" h="24px"></w-icon>
                            </div>
                            <div id="publicaciones" class="bg-gray-200 p-4 hidden">
                                <ul>
                                    <li>
                                        <a href>2</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="border-b-2 border-gray-500" />
                        </div>

                        <div>
                            <div class="flex justify-between p-2">
                                <li class="block font-bold text-sm">BORRADOR</li>
                                <w-icon icon="arrow-down" h="24px"></w-icon>
                            </div>
                            <div id="borrador" class="bg-gray-200 p-4 hidden">
                                <ul>
                                    <li>
                                        <a href>2</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="border-b-2 border-gray-500" />
                        </div>

                        <w-btn
                            class="large block text-white justify-center my-6"
                            :color="$wlinii.secondary"
                        >NUEVA PUBLICACIÓN</w-btn>
                    </div>
                </div>
            </div>
            <div>
                <div class="container bg-gray-300 m-auto">
                    <div class="flex lg:bg-white justify-center lg:justify-start">
                        <div class="font-bold text-4xl">Listado de Publicaciones</div>
                    </div>
                </div>

                <div class="container lg:hidden m-auto p-8">
                    <div class="flex">
                        <w-btn :large="true" :color="$wlinii.secondary">
                            FILTRAR
                            <w-icon class="pl-4" icon="bars-white" h="24px"></w-icon>
                        </w-btn>
                    </div>
                </div>

                <div class="container bg-gray-300 lg:bg-white m-auto p-4 lg:p-2">
                    <div class="flex-wrap lg:flex justify-around items-center">
                        <div v-for="item in cards" :key="item.i">
                            <div class="my-8 lg:my-4">
                                <!-- Insert Card -->

                                <!-- ----------- -->
                                <w-card>
                                    <div class>
                                        <w-icon
                                            v-if="item.tipo == 'Borrador'"
                                            icon="arrow-left"
                                            h="12px"
                                            class="p-2"
                                        ></w-icon>
                                        <w-icon
                                            v-if="item.tipo == 'Vendido'"
                                            icon="arrow-down"
                                            h="12px"
                                            class="p-2"
                                        ></w-icon>
                                        <w-icon
                                            v-if="item.tipo == 'Publicacion'"
                                            icon="youtube-black"
                                            h="12px"
                                            class="p-2"
                                        ></w-icon>
                                        <p class="p-2">{{item.tipo}}</p>
                                    </div>
                                    <div class>
                                        <!-- <w-icon class="p-2" icon="edit" h="14px"></w-icon> -->
                                        <w-btn icon="parking-solid"></w-btn>
                                    </div>

                                    <img src="img/departamentos/1.jpg" width="315px" />

                                    <h1 class="font-bold text-tertiary">850 Pennsylvania</h1>
                                    <p class>Philiadelphia, Cherry Hill, DC205500</p>
                                    <p>Modificación: 2020/09/05</p>
                                    <div v-if="item.tipo == 'Publicacion'" class="flex mt-4 w=auto">
                                        <w-btn :color="$wlinii.primary">CERRAR PUBLICACIÓN</w-btn>
                                    </div>
                                </w-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    tipo: "Publicacion"
                },
                {
                    tipo: "Vendido"
                },
                {
                    tipo: "Borrador"
                },
                {
                    tipo: "Publicacion"
                }
            ]
        };
    }
};
</script>

<style>
</style>