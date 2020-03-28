<template>
    <div>
        <div id="filter">
            <w-card>
                <template slot="header">
                    <div class="flex justify-between items-center">
                        <h1
                            class="white-text uppercase text-left caption tracking-wider bold"
                        >Filtros</h1>
                        <w-btn class="lg:hidden white-text bold">X</w-btn>
                    </div>
                </template>

                <div id="filtros" class="flex grid grid-cols-2">
                    <div
                        v-for="filter in filters"
                        :key="filter"
                        class="text-center secondary white-text caption px-5 rounded-full m-2"
                    >
                        {{ filter }}
                        <button @click="unset(filter)">X</button>
                    </div>
                </div>

                <w-panel header="tipo de inmueble" v-model="shownTipoInmueble">
                    <w-btn
                        @click="set(inmueble)"
                        v-for="inmueble in tipoInmueble"
                        :key="inmueble"
                    >{{ inmueble }}</w-btn>
                </w-panel>

                <w-panel header="distrito/ubicacion" v-model="shownUbicacion">
                    <w-btn
                        @click="set(ubicacion)"
                        v-for="ubicacion in ubicaciones"
                        :key="ubicacion"
                    >{{ ubicacion }}</w-btn>
                </w-panel>

                <w-panel header="precio" v-model="shownPrecio">
                    <w-btn @click="set(precio)" v-for="precio in precios" :key="precio">{{ precio }}</w-btn>
                </w-panel>

                <w-panel header="dormitorios" v-model="shownDormitorio">
                    <w-btn
                        @click="set(dormitorio)"
                        v-for="dormitorio in dormitorios"
                        :key="dormitorio"
                    >{{ dormitorio }}</w-btn>
                </w-panel>

                <w-panel header="area total (M2)" v-model="shownArea">
                    <w-btn @click="set(area)" v-for="area in areas" :key="area">{{ area }}</w-btn>
                </w-panel>

                <w-panel header="cocheras" v-model="shownCochera">
                    <w-btn
                        @click="set(cochera)"
                        v-for="cochera in cocheras"
                        :key="cochera"
                    >{{ cochera }}</w-btn>
                </w-panel>

                <w-panel header="antiguedad" v-model="shownAntiguedad">
                    <w-btn
                        @click="set(antiguedad)"
                        v-for="antiguedad in antiguedades"
                        :key="antiguedad"
                    >{{ antiguedad }}</w-btn>
                </w-panel>

                <w-panel header="estado" v-model="shownEstado">
                    <w-btn @click="set(estado)" v-for="estado in estados" :key="estado">{{ estado }}</w-btn>
                </w-panel>

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
