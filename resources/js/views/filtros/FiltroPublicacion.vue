<template>
    <div>
        <div class="w-64 bg-white rounded-lg overflow-hidden shadow-lg my-8">
            <div class="flex justify-center lg:justify-between items-center secondary primary-lg">
                <p class="hidden lg:block white-text caption bold p-2 pl-6">ORDENAR POR</p>

                <w-btn small class="block lg:hidden caption bold white-text">FILTROS X</w-btn>
            </div>

            <div class="justify-center p-4 pb-0">
                <div>
                    <div class="flex justify-between p-2">
                        <li class="block caption bold">OPERACIONES</li>
                        <w-icon icon="arrow-up" h="20px"></w-icon>
                    </div>
                    <div id="operaciones" class="bg-gray-200 p-4">
                        <ul>
                            <li>
                                <a class="caption" href>Venta</a>
                            </li>
                            <li>
                                <a class="caption" href>Alquiler</a>
                            </li>
                            <li>
                                <a class="caption" href>Traspaso</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="border-b-2 border-gray-500" />
                </div>

                <div>
                    <div class="flex justify-between p-2">
                        <li class="block caption bold">PUBLICACIONES</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
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
                        <li class="block caption bold">BORRADOR</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="borrador" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="border-b-2 border-gray-500" />
                </div>

                <div class="flex justify-center">
                    <w-btn
                        class="white-text justify-center"
                        :color="$wlinii.secondary"
                    >NUEVA PUBLICACIÓN</w-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroPublicacion"
};
</script>

<style>
</style>