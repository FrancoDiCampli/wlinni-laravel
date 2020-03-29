<template>
    <div class="container bg-gray-300">
        <!-- Paginas 9 - 58 -->
        <div class="flex-wrap rounded-lg bg-white m-4 p-4 lg:m-12 lg:p-16">
            <div>
                <h1 class="subtitle bold">Agregar Publicación</h1>
                <h1 class="caption">Agregar la información de la nueva publicación</h1>
            </div>
            <br />
            <div>
                <h1
                    class="flex caption white-text truncate lg:break-normal bg-blue-900 rounded-full rounded-tl-none p-4"
                >Configuración flexible y formas de edición, agregue y edite información de listado, fotos y ubicación de la posición</h1>
            </div>
            <br />
            <div class="block lg:hidden">
                <!-- refactorizando -->
                <div v-for="(item,i) in panels" :key="i">
                    <div
                        class="flex justify-between items-center py-2 px-6 bg-gray-200 rounded-full"
                    >
                        <h1 class="tertiary-text body bold">{{item.namePanel}}</h1>
                        <div>
                            <a
                                href
                                @click.prevent="
                                        item.value = !item.value
                                    "
                            >
                                <img
                                    :class="
                                            item.value
                                                ? 'deployed'
                                                : 'undeployed'
                                        "
                                    class="h-5"
                                    :src="
                                            item.value
                                                ? '/images/arrow-up.png'
                                                : '/images/arrow-down.png'
                                        "
                                    alt
                                />
                            </a>
                        </div>
                    </div>

                    <div :class="item.value ? ' in' : ' out'" class="mx-auto py-5 pb-0">
                        <div v-for="(sel, j) in item.selects" :key="j">
                            <div class="flex items-center pb-2">
                                <h1 class="caption bold px-5">{{sel.nameSelect}}</h1>
                                <w-icon v-if="sel.info" icon="imperios-digitales" h="14px"></w-icon>
                            </div>

                            <form>
                                <w-select
                                    v-model="sel.vModel"
                                    :placeholder="sel.placeHolder"
                                    :options="sel.opciones"
                                ></w-select>
                            </form>
                        </div>

                        <div class="flex grid grid-cols-2 justify-between">
                            <div v-for="(che, n) in item.checks" :key="n">
                                <w-checkbox :label="che.labelCheck"></w-checkbox>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <!-- ////////////////// -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NuevaPublicacion",
    data() {
        return {
            panels: [
                {
                    namePanel: "Tipo Inmueble",
                    value: false,
                    selects: [
                        {
                            nameSelect: "Tipo de Inmueble",
                            placeHolder: "Pendientes",
                            info: false,
                            opciones: ["A", "B", "C"],
                            vModel: "form.tipoInmueble"
                        },
                        {
                            nameSelect: "Sub-tipo de Inmueble",
                            placeHolder: "Pendientes",
                            info: false,
                            opciones: ["A", "B", "C"],
                            vModel: "form.subTipoInmueble"
                        }
                    ],
                    checks: []
                },
                {
                    namePanel: "Ublicacion",
                    value: false,
                    selects: [
                        {
                            nameSelect: "DEPARTAMENTO",
                            info: true,
                            placeHolder: "Elegir departamentos",
                            opciones: ["A", "B", "C"],
                            vModel: "form.departamento"
                        },
                        {
                            nameSelect: "DiSTRITO",
                            info: true,
                            placeHolder: "Elegir distrito",
                            opciones: ["A", "B", "C"],
                            vModel: "form.distrito"
                        },
                        {
                            nameSelect: "Provincias",
                            info: true,
                            placeHolder: "Elegir provincia",
                            opciones: ["A", "B", "C"],
                            vModel: "form.provincia"
                        },
                        {
                            nameSelect: "Urbanización",
                            info: true,
                            placeHolder: "Elegir ...",
                            opciones: ["A", "B", "C"],
                            vModel: "form.urbanizacion"
                        }
                    ],
                    checks: [
                        {
                            labelCheck: "Mostrar dirección"
                        },
                        {
                            labelCheck: "Ocultar dirección"
                        }
                    ]
                },
                {
                    namePanel: "Precio",
                    value: false,
                    selects: [
                        {
                            nameSelect: "MONEDA",
                            info: false,
                            placeHolder: "Elegir moneda",
                            opciones: ["Dolar americano", "B", "C"],
                            vModel: "form.moneda"
                        },
                        {
                            nameSelect: "PRECIO",
                            info: false,
                            placeHolder: "Elegir precio",
                            opciones: ["S/00", "B", "C"],
                            vModel: "form.precio"
                        }
                    ],
                    checks: [
                        {
                            labelCheck: "Consultar"
                        }
                    ]
                },
                {
                    namePanel: "Datos del inmueble",
                    value: false,
                    selects: [
                        {
                            nameSelect: "AREA TOTAL",
                            info: false,
                            placeHolder: "Elegir area",
                            opciones: ["0", "B", "C"],
                            vModel: "form.areaTotal"
                        },
                        {
                            nameSelect: "AREA CONSTRUIDA",
                            info: false,
                            placeHolder: "Elegir area",
                            opciones: ["0", "B", "C"],
                            vModel: "form.areaConstruida"
                        },
                        {
                            nameSelect: "AREA TERRENO",
                            info: false,
                            placeHolder: "Elegir area",
                            opciones: ["0", "B", "C"],
                            vModel: "form.areaTerreno"
                        }
                    ],
                    checks: []
                },
                {
                    namePanel: "Servicios",
                    value: false,
                    selects: [],
                    checks: [
                        {
                            labelCheck: "Agua"
                        },
                        {
                            labelCheck: "Luz"
                        },
                        {
                            labelCheck: "Conexión a gas"
                        },
                        {
                            labelCheck: "Teléfono"
                        },
                        {
                            labelCheck: "Cable"
                        },
                        {
                            labelCheck: "Internet"
                        },
                        {
                            labelCheck: "Guardiania"
                        },
                        {
                            labelCheck: "Servicio de limpieza"
                        },
                        {
                            labelCheck: "Sistema de seguridad"
                        }
                    ]
                },
                {
                    namePanel: "Ambientes",
                    value: false,
                    selects: [],
                    checks: [
                        {
                            labelCheck: "Agua"
                        },
                        {
                            labelCheck: "Luz"
                        },
                        {
                            labelCheck: "Conexión a gas"
                        },
                        {
                            labelCheck: "Teléfono"
                        },
                        {
                            labelCheck: "Cable"
                        },
                        {
                            labelCheck: "Internet"
                        },
                        {
                            labelCheck: "Guardiania"
                        },
                        {
                            labelCheck: "Servicio de limpieza"
                        },
                        {
                            labelCheck: "Sistema de seguridad"
                        }
                    ]
                },
                {
                    namePanel: "Areas Comunes",
                    value: false,
                    selects: [],
                    checks: [
                        {
                            labelCheck: "Agua"
                        },
                        {
                            labelCheck: "Luz"
                        },
                        {
                            labelCheck: "Conexión a gas"
                        },
                        {
                            labelCheck: "Teléfono"
                        },
                        {
                            labelCheck: "Cable"
                        },
                        {
                            labelCheck: "Internet"
                        },
                        {
                            labelCheck: "Guardiania"
                        },
                        {
                            labelCheck: "Servicio de limpieza"
                        },
                        {
                            labelCheck: "Sistema de seguridad"
                        }
                    ]
                }
            ],

            mostrarDireccion: false,
            ocultarDireccion: false,
            form: {}
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
