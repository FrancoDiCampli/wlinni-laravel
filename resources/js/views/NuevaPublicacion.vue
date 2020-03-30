<template>
    <div class="bg-gray-300">
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
            <div class="block">
                <!-- refactorizando -->
                <div v-for="(item,i) in panels" :key="i">
                    <div
                        class="flex lg:hidden justify-between items-center py-2 px-6 bg-gray-200 rounded-full"
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

                    <div
                        v-if="windowWidth<= 764"
                        :class="item.value ? ' in' : ' out'"
                        class="mx-auto py-5 pb-0"
                    >
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

                    <div v-else>
                        <h1 class="tertiary-text body bold p-5">{{item.namePanel}}</h1>
                        <div
                            class="flex justify-between grid"
                            :class="item.selects.length % 2 ?'grid-cols-3':'grid-cols-2'"
                        >
                            <div v-for="(sel, j) in item.selects" :key="j" class="flex-wrap px-2">
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
                        </div>

                        <div class="flex grid grid-cols-3 justify-between">
                            <div v-for="(che, n) in item.checks" :key="n">
                                <w-checkbox :label="che.labelCheck"></w-checkbox>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <!-- ////////////////// -->

                <div>
                    <h1 class="tertiary-text body bold p-5">Enlace de video</h1>
                    <form class="block lg:w-4/5">
                        <w-input
                            :placeholder="'Ejemplo: https://www.youtube.com/watch?v=uN5Cux5t0Ak'"
                        ></w-input>
                    </form>
                </div>
                <div>
                    <h1 class="tertiary-text body bold p-5">Medidas de ambiente</h1>
                    <div class="block lg:flex lg:grid grid-cols-2 justify-between">
                        <div class="pr-2">
                            <h1 class="caption bold px-5 pb-2">AMBIENTE</h1>
                            <form class="block">
                                <w-input :placeholder="'Ejemplo: sala, comedor'"></w-input>
                            </form>
                        </div>
                        <div class="hidden lg:block pl-2">
                            <h1 class="caption bold px-5 pb-2">AMBIENTE</h1>
                            <form class="block">
                                <w-input :placeholder="'Ejemplo: sala, comedor'"></w-input>
                            </form>
                        </div>
                    </div>
                    <h1 class="caption bold px-5 pb-2">DESCRIPCION</h1>
                    <textarea
                        class="rounded-lg border-black border-2 px-4 py-2"
                        placeholder="Ejemplo: sala, comedor"
                        name
                        id
                        :cols=" windowWidth <= 734 ? '33':'100'"
                        rows="10"
                    ></textarea>
                </div>
                <div>
                    <h1 class="tertiary-text body bold p-5">Locación</h1>
                    <h1
                        class="caption bold px-5 pb-2"
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</h1>
                    <GoogleMap
                        class="my-4"
                        :latitude="latitude"
                        :longitude="longitude"
                        :apiKey="apiKey"
                        :zoom="12"
                    />
                </div>
                <div>
                    <div class="flex items-center p-5">
                        <h1 class="tertiary-text body bold pr-2">Fotos</h1>
                        <span class="caption opacity-50 pl-2">(0 a 20 disponibles)</span>
                    </div>
                    <div class="flex-wrap lg:flex lg:grid grid-cols-2 justify-around">
                        <div class="bg-gray-300 rounded-lg mb-4 lg:mr-4 lg:mb-0">
                            <div class="fileButton justify-center">
                                <img src="../components/wlinii_components/iconos/upload-image.png" />
                                <input name="fotos" class="fileInput" type="file" />
                                <div class="caption opacity-75">Arrastra fotos desde tu computadora</div>
                                <div
                                    class="caption white-text bold bg-blue-300 rounded-full"
                                >SELECCIONAR FOTOS</div>
                                <div
                                    class="caption whitespace-normal opacity-75"
                                >Formatos permitidos: JPG, JPEG, PNG (Tamaño máximo: 5Mb)</div>
                            </div>
                        </div>
                        <div class="bg-gray-300 rounded-lg mt-4 lg:ml-4 lg:mt-0">
                            <div class="fileButton justify-center">
                                <img src="../components/wlinii_components/iconos/upload-video.png" />
                                <input name="fotos" class="fileInput" type="file" />
                                <div class="caption opacity-75">Arrastra video desde tu computadora</div>
                                <div
                                    class="caption white-text bold bg-blue-300 rounded-full"
                                >SELECCIONAR VIDEO</div>
                                <div
                                    class="caption whitespace-normal opacity-75"
                                >Formatos permitidos: MP4, AVI, (Tamaño máximo: 50Mb)</div>
                            </div>
                        </div>
                    </div>
                    <div class="my-8 mx-2 lg:mx-48">
                        <p
                            class="caption opacity-75 text-center"
                        >Si ha completadp todos los campos y está seguro de la exactitud de toda la información, haga clic en el botón a continuación para guardar los datos</p>
                    </div>
                    <div class="flex justify-center">
                        <w-btn large class="caption bold white-text">GUARDAR AVISO</w-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleMap from "vue-maps";

export default {
    name: "NuevaPublicacion",
    data() {
        return {
            latitude: -12.1122095,
            longitude: -77.047945,
            apiKey: "AIzaSyAXlj8mkvRRg6KTVesim7xcM8CcceMfcAc",
            windowWidth: window.innerWidth,
            panels: [
                {
                    namePanel: "Tipo Inmueble",
                    value: false,
                    selects: [
                        {
                            nameSelect: "Tipo de Inmueble",
                            placeHolder: "Pendientes",
                            info: false,
                            opciones: ["A", "B", "C"]
                        },
                        {
                            nameSelect: "Sub-tipo de Inmueble",
                            placeHolder: "Pendientes",
                            info: false,
                            opciones: ["A", "B", "C"]
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
                            opciones: ["A", "B", "C"]
                        },
                        {
                            nameSelect: "DiSTRITO",
                            info: true,
                            placeHolder: "Elegir distrito",
                            opciones: ["A", "B", "C"]
                        },
                        {
                            nameSelect: "Provincias",
                            info: true,
                            placeHolder: "Elegir provincia",
                            opciones: ["A", "B", "C"]
                        },
                        {
                            nameSelect: "Urbanización",
                            info: true,
                            placeHolder: "Elegir ...",
                            opciones: ["A", "B", "C"]
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
                            opciones: ["Dolar americano", "B", "C"]
                        },
                        {
                            nameSelect: "PRECIO",
                            info: false,
                            placeHolder: "Elegir precio",
                            opciones: ["S/00", "B", "C"]
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
                            opciones: ["0", "B", "C"]
                        },
                        {
                            nameSelect: "AREA CONSTRUIDA",
                            info: false,
                            placeHolder: "Elegir area",
                            opciones: ["0", "B", "C"]
                        },
                        {
                            nameSelect: "AREA TERRENO",
                            info: false,
                            placeHolder: "Elegir area",
                            opciones: ["0", "B", "C"]
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
    components: {
        GoogleMap
    },
    methods: {
        set(op) {
            this.filters.push(op);
        },
        unset(op) {
            const i = this.filters.indexOf(op);
            this.filters.splice(i, 1);
        }
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style>
.fileButton {
    overflow: hidden;
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: auto;
    line-height: 35px;
    padding: 0 1.5rem;
    font-size: 13px;

    font-family: "Roboto";
    letter-spacing: 0.8px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 2px;
    transition: all 0.3s ease-out;
}
.fileInput {
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    font-size: 50px;
    opacity: 0;
    -moz-opacity: 0;
    filter: Alpha(opacity=0);
}
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
