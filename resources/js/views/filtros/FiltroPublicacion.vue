<template>
    <div>
        <div id="filter">
            <w-card :shadow="false">
                <template slot="header">
                    <div class="flex justify-between items-center">
                        <h1
                            class="white-text hidden lg:flex uppercase text-left caption tracking-wider bold"
                        >Ordenar Por</h1>
                        <h1
                            class="white-text lg:hidden uppercase text-left caption tracking-wider bold"
                        >Filtros</h1>
                        <w-btn class="lg:hidden white-text bold">X</w-btn>
                    </div>
                </template>

                <div id="filtros" class="flex grid grid-cols-2">
                    <div
                        v-for="filter in filters"
                        :key="filter"
                        class="flex justify-between items-center text-center secondary white-text caption px-5 rounded-full m-2"
                    >
                        {{ filter }}
                        <button class="m-4" @click="unset(filter)">X</button>
                    </div>
                </div>

                <w-panel header="operaciones" v-model="shownOperaciones">
                    <w-btn
                        @click="set(operacion)"
                        v-for="operacion in operaciones"
                        :key="operacion"
                    >{{ operacion }}</w-btn>
                </w-panel>

                <w-panel header="publicaciones" v-model="shownPublicaciones">
                    <w-btn
                        @click="set(publicacion)"
                        v-for="publicacion in publicaciones"
                        :key="publicacion"
                    >{{ publicacion }}</w-btn>
                </w-panel>

                <w-panel header="borrador" v-model="shownBorrador">
                    <w-btn
                        @click="set(borrador)"
                        v-for="borrador in borradores"
                        :key="borrador"
                    >{{ borrador }}</w-btn>
                </w-panel>

                <w-btn
                    :dark="true"
                    color="secondary"
                    :fullwidth="true"
                    :large="true"
                    @click="$router.push('/nueva_publicacion')"
                >nueva publicación</w-btn>
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
            publicaciones: ["Publicado", "Vendido", "Borrador"],
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
</style>
