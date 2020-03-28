<template>
    <div class="bg-gray-200">
        <!-- PAGINAS 8 - 14 - 25 - 56 -->

        <div class="flex justify-around items-start">
            <div class="hidden lg:flex lg:m-8 mr-4">
                <filtro-publicacion></filtro-publicacion>
            </div>

            <div class="m-8 ml-4">
                <w-card>
                    <div
                        class="flex bg-gray-200 lg:bg-white justify-center lg:justify-start"
                    >
                        <div class="subtitle bold">
                            Listado de Publicaciones
                        </div>
                    </div>

                    <div class="flex lg:hidden m-auto">
                        <div class="flex">
                            <w-btn
                                class="flex bold white-text items-center"
                                :color="$wlinii.secondary"
                            >
                                FILTRAR
                                <w-icon
                                    class="pl-4"
                                    icon="bars-white"
                                    h="24px"
                                ></w-icon>
                            </w-btn>
                        </div>
                    </div>
                    <div class="bg-gray-200 lg:bg-white lg:my-4">
                        <div
                            class="flex-wrap lg:grid gap-8 grid-cols-3 justify-between items-center"
                        >
                            <div v-for="item in cards" :key="item.i">
                                <div class="my-8 lg:my-0">
                                    <w-card
                                        :image="item.foto"
                                        :activeContent="true"
                                        v-model="item.showForm"
                                    >
                                        <template
                                            slot="header"
                                            v-if="!item.showForm"
                                        >
                                            <div
                                                class="flex items-center justify-between caption white-text"
                                            >
                                                <div class="flex items-center">
                                                    <div class="info-item">
                                                        <div
                                                            :class="
                                                                `
                                                dot 
                                                ${
                                                    item.state == 'Publicado'
                                                        ? 'success'
                                                        : ''
                                                }
                                                ${
                                                    item.state == 'Borrador'
                                                        ? 'tertiary'
                                                        : ''
                                                }
                                                ${
                                                    item.state == 'Vendido'
                                                        ? 'secondary'
                                                        : ''
                                                }
                                            `
                                                            "
                                                        ></div>
                                                        <p
                                                            class="caption white-text"
                                                        >
                                                            {{ item.state }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center">
                                                    <w-btn :icon="true">
                                                        <w-icon
                                                            icon="edit-white"
                                                            h="13px"
                                                        ></w-icon>
                                                    </w-btn>
                                                    <w-btn
                                                        :icon="true"
                                                        @click="
                                                            item.showForm = true
                                                        "
                                                    >
                                                        <w-icon
                                                            icon="trash-white"
                                                            h="13px"
                                                        ></w-icon>
                                                    </w-btn>
                                                </div>
                                            </div>
                                        </template>

                                        <div v-if="item.showForm">
                                            <h1 class="body bold white-text">
                                                Dar de baja
                                            </h1>
                                            <br />
                                            <form>
                                                <w-select
                                                    :dark="true"
                                                    :tile="true"
                                                    label="Elegir Motivo"
                                                    :options="[
                                                        'Venta',
                                                        'Alquiler',
                                                        'Traspaso',
                                                        'Pausar',
                                                        'Canceladas'
                                                    ]"
                                                    v-model="item.form.select"
                                                ></w-select>
                                                <w-input
                                                    :dark="false"
                                                    :tile="true"
                                                    v-model="item.form.input1"
                                                    placeholder="Buscar Asesor"
                                                ></w-input>
                                                <w-input
                                                    :dark="true"
                                                    :tile="true"
                                                    v-model="item.form.input2"
                                                    placeholder="Elegir Moneda"
                                                ></w-input>
                                                <w-input
                                                    :dark="true"
                                                    :tile="true"
                                                    v-model="item.form.input3"
                                                    placeholder="Ingresar Monto de Venta"
                                                ></w-input>
                                            </form>
                                            <w-btn
                                                @click="item.showForm = false"
                                                color="secondary"
                                                small
                                                :dark="true"
                                                :fullwidth="true"
                                                >Guardar</w-btn
                                            >
                                        </div>

                                        <div v-else>
                                            <h1
                                                class="caption bold tertiary-text"
                                            >
                                                850 Pennsylvania
                                            </h1>
                                            <p class="caption html">
                                                Philiadelphia, Cherry Hill,
                                                DC205500
                                            </p>
                                            <p class="caption html">
                                                Modificación: 2020/09/05
                                            </p>
                                            <w-btn
                                                v-if="item.boton"
                                                :dark="true"
                                                :small="true"
                                                :fullwidth="true"
                                                color="primary"
                                                >{{ item.boton }}</w-btn
                                            >
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
import FiltroPublicacion from "./filtros/FiltroPublicacion.vue";

export default {
    data() {
        return {
            cards: [
                {
                    state: "Publicado",
                    foto: "/images/departamentos/1.jpg",
                    showForm: false,
                    boton: "cerrar publicación",
                    form: {}
                },
                {
                    state: "Vendido",
                    foto: "/images/departamentos/2.jpg",
                    showForm: false,
                    form: {}
                },
                {
                    state: "Borrador",
                    foto: "/images/departamentos/3.jpg",
                    showForm: false,
                    form: {}
                },
                {
                    state: "Publicado",
                    foto: "/images/departamentos/4.jpg",
                    showForm: false,
                    boton: "cerrar publicación",
                    form: {}
                },
                {
                    state: "Borrador",
                    foto: "/images/departamentos/5.jpg",
                    showForm: false,
                    form: {}
                },
                {
                    state: "Vendido",
                    foto: "/images/departamentos/6.jpg",
                    showForm: false,
                    form: {}
                }
            ]
        };
    },

    components: {
        FiltroPublicacion
    }
};
</script>

<style></style>
