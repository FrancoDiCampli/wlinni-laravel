<template>
    <div>
        <div id="filter">
            <w-card>
                <template slot="header">
                    <h1
                        class="white-text uppercase text-left caption tracking-wider bold"
                    >Ordenar Por</h1>
                </template>

                <div id="filtros" class="flex-wrap m-0 p-0">
                    <div
                        v-for="filter in filters"
                        :key="filter"
                        class="text-center secondary white-text caption px-5 rounded-full m-2"
                    >
                        {{filter}}
                        <button @click="unset(filter)">X</button>
                    </div>
                </div>
                <section class="m-auto">
                    <!-- Operaciones  -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Operaciones</h1>
                            <div>
                                <a href @click.prevent="shownOperaciones=!shownOperaciones">
                                    <img
                                        :class="shownOperaciones ? 'deployed' : 'undeployed'"
                                        class="h-5"
                                        :src="shownOperaciones ? '/images/arrow-up.png':'/images/arrow-down.png'"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>

                        <div
                            :class="shownOperaciones ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(operacion)"
                                v-for="operacion in operaciones"
                                :key="operacion"
                                class="outline-none block py-3 caption"
                            >{{operacion}}</button>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                    </article>
                    <!-- Publicaciones  -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Publicaciones</h1>
                            <div>
                                <a href @click.prevent="shownPublicaciones=!shownPublicaciones">
                                    <img
                                        :class="shownPublicaciones ? 'deployed' : 'undeployed'"
                                        class="h-5"
                                        :src="shownPublicaciones ? '/images/arrow-up.png':'/images/arrow-down.png'"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>

                        <div
                            :class="shownPublicaciones ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(publicacion)"
                                v-for="publicacion in publicaciones"
                                :key="publicacion"
                                class="outline-none block py-3 caption"
                            >{{publicacion}}</button>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                    </article>
                    <!-- Borrador -->
                    <article>
                        <div class="flex justify-between py-5 px-2">
                            <h1 class="uppercase block caption bold">Borrador</h1>
                            <div>
                                <a href @click.prevent="shownBorrador=!shownBorrador">
                                    <img
                                        :class="shownBorrador ? 'deployed' : 'undeployed'"
                                        class="h-5"
                                        :src="shownBorrador ? '/images/arrow-up.png':'/images/arrow-down.png'"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>

                        <div
                            :class="shownBorrador ? ' in' : ' out'"
                            class="bg-gray-300 mx-auto px-10 py-5"
                        >
                            <button
                                @click.prevent="set(borrador)"
                                v-for="borrador in borradores"
                                :key="borrador"
                                class="outline-none block py-3 caption"
                            >{{borrador}}</button>
                        </div>
                        <hr class="border-b-2 border-gray-500" />
                    </article>
                </section>
                <div class="flex justify-center">
                    <w-btn
                        small
                        class="white-text justify-center"
                        :color="$wlinii.secondary"
                    >NUEVA PUBLICACIÓN</w-btn>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroPublicacion",
    data() {
        return {
            shownOperaciones: false,
            shownPublicaciones: false,
            shownBorrador: false,
            filters: [],
            operaciones: ["Venta", "Alquiler", "Traspaso"],
            publicaciones: ["Casas", "Alquileres", "Oficinas", "Pausa"],
            borradores: ["Option"]
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

<style>
.container {
    height: 500px;
}
.in {
    visibility: visible;
    position: relative;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
}
.out {
    visibility: hidden;
    position: absolute;
    animation: 1s fadeIn;
    opacity: 0;
    transition: visibility 0s linear 300ms, opacity 300ms;
}
.undeployed {
    transform: rotate(0deg);
    transition: 500ms;
    transition-duration: 1s;
}
.deployed {
    transform: rotate(0deg);
    transition: 500ms;
}
</style>
