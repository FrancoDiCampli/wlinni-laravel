<template>
    <div>
        <div class="w-64 rounded-lg overflow-hidden shadow-lg">
            <div class="flex justify-center lg:justify-between items-center secondary primary-lg">
                <p class="hidden lg:block white-text caption bold p-2 pl-4">FILTROS</p>
                <w-btn small class="block lg:hidden caption bold white-text">FILTROS X</w-btn>
            </div>

            <div class="justify-center p-4">
                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">TIPO DE INMUEBLE</li>
                        <w-icon icon="arrow-up" h="20px"></w-icon>
                    </div>
                    <div id="tipoinmueble" class="bg-gray-200 p-4">
                        <ul>
                            <li>
                                <a class="caption" href>Departamento</a>
                            </li>
                            <li>
                                <a class="caption" href>Casa</a>
                            </li>
                            <li>
                                <a class="caption" href>Oficinas</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">DISTRITO/UBICACIÓN</li>
                        <w-icon icon="arrow-up" h="20px"></w-icon>
                    </div>
                    <div id="distrito_ubicacion" class="bg-gray-200 p-4">
                        <ul>
                            <li>
                                <a class="caption" href>San Isidro</a>
                            </li>
                            <li>
                                <a class="caption" href>Miraflores</a>
                            </li>
                            <li>
                                <a class="caption" href>Santiago de Surco</a>
                            </li>
                            <li>
                                <a class="caption" href>La Molina</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">PRECIO</li>
                        <w-icon icon="arrow-up" h="20px"></w-icon>
                    </div>
                    <div id="precio" class="bg-gray-200 p-4">
                        <ul>
                            <li>
                                <a class="caption" href>S/ 1500</a>
                            </li>
                            <li>
                                <a class="caption" href>S/ 2500</a>
                            </li>
                            <li>
                                <a class="caption" href>S/ 3550</a>
                            </li>
                            <li>
                                <a class="caption" href>S/ 5400</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">DORMITORIOS</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="dormitorios" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">AREA TOTAL (M2)</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="area" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">COCHERAS</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="cocheras" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">ANTIGÜEDAD</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="antiguedad" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between border-b-2 border-gray-500 p-2">
                        <li class="block caption bold">ESTADO</li>
                        <w-icon icon="arrow-down" h="20px"></w-icon>
                    </div>
                    <div id="estado" class="bg-gray-200 p-4 hidden">
                        <ul>
                            <li>
                                <a class="caption" href>2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-center lg:hidden mt-2">
                    <w-btn large class="caption bold white-text" :color="$wlinii.secondary">APLICAR</w-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroInmueble"
};
</script>

<style>
</style>