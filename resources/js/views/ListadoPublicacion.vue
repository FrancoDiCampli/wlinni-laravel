<template>
    <div class="bg-gray-200">
        <!-- PAGINAS 8 - 14 - 25 - 56 -->

        <div class="flex justify-between items-start">
            <div class="hidden lg:flex lg:m-8 mr-4">
                <filtro></filtro>
            </div>

            <div class="m-8 ml-4">
                <w-card>
                    <div class="flex bg-gray-200 lg:bg-white justify-center lg:justify-start">
                        <div class="subtitle bold">Listado de Publicaciones</div>
                    </div>

                    <div class="container lg:hidden m-auto">
                        <div class="flex">
                            <w-btn
                                class="flex bold white-text items-center"
                                :color="$wlinii.secondary"
                            >
                                FILTRAR
                                <w-icon class="pl-4" icon="bars-white" h="24px"></w-icon>
                            </w-btn>
                        </div>
                    </div>

                    <div class="bg-gray-200 lg:bg-white lg:my-4">
                        <div
                            class="flex-wrap lg:grid gap-8 grid-cols-3 justify-between items-center"
                        >
                            <div v-for="item in cards" :key="item.i">
                                <div class="my-8 lg:my-0">
                                    <w-card :image="item.image" :hover="'full-hover'">
                                        <template slot="header">
                                            <div
                                                class="flex items-center justify-between caption white-text"
                                            >
                                                <div class="flex items-center">
                                                    <div>
                                                        <div
                                                            v-if="
                                                                item.tipo ==
                                                                    'Borrador'
                                                            "
                                                        >
                                                            <div class="circleBorrador"></div>
                                                        </div>
                                                        <div
                                                            v-if="
                                                                item.tipo ==
                                                                    'Vendido'
                                                            "
                                                        >
                                                            <div class="circleVendido"></div>
                                                        </div>
                                                        <div
                                                            v-if="
                                                                item.tipo ==
                                                                    'Publicado'
                                                            "
                                                        >
                                                            <div class="circlePublicado"></div>
                                                        </div>
                                                    </div>
                                                    <p class="px-2">{{ item.tipo }}</p>
                                                </div>
                                                <div class="flex items-center">
                                                    <w-nav-btn
                                                        icon="edit"
                                                        iconH="14px"
                                                        class="px-4"
                                                    ></w-nav-btn>
                                                    <w-nav-btn
                                                        icon="parking-solid"
                                                        iconH="14px"
                                                        class="px-4"
                                                    ></w-nav-btn>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Aca se me complico -->
                                        <template slot="image">
                                            <form>
                                                <w-input></w-input>
                                                <w-input></w-input>
                                            </form>
                                        </template>
                                        <!-- ----------------- -->

                                        <div>
                                            <h1 class="caption bold tertiary-text">850 Pennsylvania</h1>
                                            <p class="caption html">
                                                Philiadelphia, Cherry Hill,
                                                DC205500
                                            </p>
                                            <p class="caption html">Modificación: 2020/09/05</p>
                                        </div>
                                        <div
                                            v-if="item.tipo == 'Publicado'"
                                            class="flex justify-center"
                                        >
                                            <w-btn
                                                small
                                                class="caption white-text"
                                                :color="$wlinii.primary"
                                            >CERRAR PUBLICACIÓN</w-btn>
                                        </div>
                                    </w-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </w-card>
            </div>
        </div>
    </div>
</template>

<script>
import Filtro from "./filtros/FiltroPublicacion.vue";

export default {
    data() {
        return {
            cards: [
                {
                    tipo: "Publicado",
                    image: "/images/departamentos/1.jpg"
                },
                {
                    tipo: "Vendido",
                    image: "/images/departamentos/2.jpg"
                },
                {
                    tipo: "Borrador",
                    image: "/images/departamentos/3.jpg"
                },
                {
                    tipo: "Publicado",
                    image: "/images/departamentos/4.jpg"
                },
                {
                    tipo: "Borrador",
                    image: "/images/departamentos/5.jpg"
                },
                {
                    tipo: "Vendido",
                    image: "/images/departamentos/6.jpg"
                }
            ]
        };
    },

    components: {
        Filtro
    }
};
</script>

<style></style>
