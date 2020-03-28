<template>
    <div>
        <div id="filter">
            <w-card>
                <template slot="header">
                    <div class="flex justify-between items-center">
                        <h1
                            class="white-text uppercase text-left caption tracking-wider bold"
                        >Filtros Aplicados</h1>
                        <w-btn class="lg:hidden white-text bold">X</w-btn>
                    </div>
                </template>

                <div id="filtros" class="flex grid grid-cols-3">
                    <div
                        v-for="filter in filters"
                        :key="filter"
                        class="text-center secondary white-text caption px-5 rounded-full m-2"
                    >
                        {{ filter }}
                        <button @click="unset(filter)">X</button>
                    </div>
                </div>
                <section class="m-auto">
                    <!-- Tipo Inmueble  -->
                    <article>
                        <div class="flex justify-between pb-5 px-2">
                            <h1 class="uppercase block caption bold">Tipo De Inmueble</h1>
                            <div>
                                <a
                                    href
                                    @click.prevent="
                                        shownTipoInmueble = !shownTipoInmueble
                                    "
                                >
                                    <img
                                        :class="
                                            shownTipoInmueble
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownTipoInmueble
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownTipoInmueble ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(inmueble)"
                                v-for="inmueble in tipoInmueble"
                                :key="inmueble"
                                class="outline-none block py-3 caption"
                            >{{ inmueble }}</button>
                        </div>
                    </article>
                    <!-- Distrito / Ubicacion  -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Distrito/Ubicación</h1>
                            <div>
                                <a
                                    href
                                    @click.prevent="
                                        shownUbicacion = !shownUbicacion
                                    "
                                >
                                    <img
                                        :class="
                                            shownUbicacion
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownUbicacion
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownUbicacion ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(ubicacion)"
                                v-for="ubicacion in ubicaciones"
                                :key="ubicacion"
                                class="outline-none block py-3 caption"
                            >{{ ubicacion }}</button>
                        </div>
                    </article>
                    <!-- Precio -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Precio</h1>
                            <div>
                                <a href @click.prevent="shownPrecio = !shownPrecio">
                                    <img
                                        :class="
                                            shownPrecio
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownPrecio
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownPrecio ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(precio)"
                                v-for="precio in precios"
                                :key="precio"
                                class="outline-none block py-3 caption"
                            >{{ precio }}</button>
                        </div>
                    </article>

                    <!-- Dormitorio -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Dormitorios</h1>
                            <div>
                                <a
                                    href
                                    @click.prevent="
                                        shownDormitorio = !shownDormitorio
                                    "
                                >
                                    <img
                                        :class="
                                            shownDormitorio
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownDormitorio
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownDormitorio ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(dormitorio)"
                                v-for="dormitorio in dormitorios"
                                :key="dormitorio"
                                class="outline-none block py-3 caption"
                            >{{ dormitorio }}</button>
                        </div>
                    </article>

                    <!-- Area Total -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Area Total (M2)</h1>
                            <div>
                                <a href @click.prevent="shownArea = !shownArea">
                                    <img
                                        :class="
                                            shownArea
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownArea
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownArea ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(area)"
                                v-for="area in areas"
                                :key="area"
                                class="outline-none block py-3 caption"
                            >{{ area }}</button>
                        </div>
                    </article>

                    <!-- Cocheras -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Cocheras</h1>
                            <div>
                                <a
                                    href
                                    @click.prevent="
                                        shownCochera = !shownCochera
                                    "
                                >
                                    <img
                                        :class="
                                            shownCochera
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownCochera
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownCochera ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(cochera)"
                                v-for="cochera in cocheras"
                                :key="cochera"
                                class="outline-none block py-3 caption"
                            >{{ cochera }}</button>
                        </div>
                    </article>

                    <!-- Antiguedad -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Antigüedad</h1>
                            <div>
                                <a
                                    href
                                    @click.prevent="
                                        shownAntiguedad = !shownAntiguedad
                                    "
                                >
                                    <img
                                        :class="
                                            shownAntiguedad
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownAntiguedad
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownAntiguedad ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(antiguedad)"
                                v-for="antiguedad in antiguedades"
                                :key="antiguedad"
                                class="outline-none block py-3 caption"
                            >{{ antiguedad }}</button>
                        </div>
                    </article>

                    <!-- Estado -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Estado</h1>
                            <div>
                                <a href @click.prevent="shownEstado = !shownEstado">
                                    <img
                                        :class="
                                            shownEstado
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                        class="h-5"
                                        :src="
                                            shownEstado
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                        <div
                            :class="shownEstado ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(estado)"
                                v-for="estado in estados"
                                :key="estado"
                                class="outline-none block py-3 caption"
                            >{{ estado }}</button>
                        </div>
                    </article>
                </section>

                <div class="flex justify-center lg:hidden">
                    <w-btn
                        small
                        class="caption bold white-text"
                        :color="$wlinii.secondary"
                        :fullwidth="true"
                        @click="$router.push('/')"
                    >APLICAR</w-btn>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroInmueble",
    data() {
        return {
            shownTipoInmueble: false,
            shownUbicacion: false,
            shownPrecio: false,
            shownDormitorio: false,
            shownArea: false,
            shownCochera: false,
            shownAntiguedad: false,
            shownEstado: false,
            filters: [],
            tipoInmueble: ["Departamento", "Casa", "Oficina"],
            ubicaciones: [
                "San Isidro",
                "Miraflores",
                "Santiago de Surco",
                "La Molina"
            ],
            precios: ["S/ 2500", "S/ 1500", "S/ 3550", "S/ 5400"],
            dormitorios: ["1 dorm.", "2 dorm."],
            areas: ["120m"],
            cocheras: ["0 coch.", "1 coch.", "2 coch."],
            antiguedades: ["Option"],
            estados: ["A estrenar"]
        };
    },
    methods: {
        set(op) {
            this.filters.push(op);
        },
        unset(op) {
            const i = this.filters.indexOf(op);
            this.filters.splice(i, 1);
        }
    }
};
</script>

<style></style>
