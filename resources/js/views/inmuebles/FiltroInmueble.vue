<template>
    <div>
        <div class="flex flex-row flex-wrap" v-if="filtros.length > 0">
            <w-btn
                :small="true"
                :rounded="true"
                color="secondary"
                :dark="true"
                v-for="(filtro, i) in filtros"
                :key="i"
                @click="unset(filtro)"
            >
                {{ filtro }} X
            </w-btn>
        </div>
        <div v-for="(panel, i) in panels" :key="i">
            <w-panel :header="panel.name" v-model="panel.value">
                <w-btn
                    v-for="(op, i) in panel.options"
                    :key="i"
                    @click="set(op)"
                >
                    {{ op }}
                </w-btn>
            </w-panel>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroPublicacion",
    data() {
        return {
            panels: [
                {
                    value: false,
                    name: "Tipo de Inmueble",
                    options: ["Departamento", "Casa", "Oficina"]
                },
                {
                    value: false,
                    name: "Distrito / Ubicación",
                    options: [
                        "San Isidro",
                        "Miraflores",
                        "Santiago de Surco",
                        "La Molina"
                    ]
                },
                {
                    value: false,
                    name: "Precio",
                    options: ["S/ 2500", "S/ 1500", "S/ 3550", "S/ 5400"]
                },
                {
                    value: false,
                    name: "Dormitorios",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },

                {
                    value: false,
                    name: "Area Toral (m2)",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },
                {
                    value: false,
                    name: "Cocheras",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },
                {
                    value: false,
                    name: "Antigüedad",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },
                {
                    value: false,
                    name: "Estado",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                }
            ],

            filtros: []
        };
    },
    methods: {
        set(op) {
            this.filtros.push(op);
        },
        unset(op) {
            const i = this.filtros.indexOf(op);
            this.filtros.splice(i, 1);
        }
    }
};
</script>

<style></style>
