<template>
    <!-- 
        
        perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/a82326a5-df19-4a0b-8bf3-0ffc9ebacba4/-perfil-del-agente-trabajador)
        perfil-del-agente-trabajador-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/04b236a4-6d84-48b4-95bf-0128bbd86c67/-perfil-del-agente-trabajador-1)
        MB-perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/78ea51c5-58e6-478d-abb9-a31678b41cf0/MB-perfil-del-agente-trabajador)

    -->

    <div>
        <!-- PERFIL -->
        <div class="agente-container">
            <w-card :shadow="false">
                <div class="flex flex-row justify-between flex-wrap">
                    <div class="w-full md:w-1/3">
                        <div class="block md:hidden ml-1">
                            <p class="bold">PERFIL AGENTES</p>
                            <div class="divider my-5"></div>
                        </div>
                        <div class="flex flex-col items-center flex-wrap">
                            <div class="w-full flex flex-row justify-center">
                                <img :src="agent.img" width="290" height="auto" />
                            </div>
                            <div
                                class="hidden md:w-full md:flex md:flex-row md:justify-center md:flex-wrap"
                            >
                                <p class="my-3">Valoración del agente</p>
                                <div class="w-full flex flex-row justify-center">
                                    <w-btn
                                        :icon="true"
                                        v-for="i in 5"
                                        :key="i"
                                        :disabled="true"
                                        style="margin: 2px;"
                                    >
                                        <w-icon
                                            :icon="agent.stars >= i ? 'star-brown' : 'star-grey'"
                                            h="14px"
                                        ></w-icon>
                                    </w-btn>
                                </div>
                                <div class="w-full flex flex-row justify-center my-5">
                                    <w-btn :icon="true">
                                        <w-icon icon="mail-grey" h="12px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="facebook-grey" h="15px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="linkedin-grey" h="17px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="twitter-grey" h="15px"></w-icon>
                                    </w-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3">
                        <div class="hidden md:block">
                            <p class="bold">PERFIL AGENTES</p>
                            <div class="divider my-5"></div>
                        </div>
                        <p class="subtitle bold mt-5 md:mt-0">{{ agent.name }}</p>
                        <p class="mb-8">{{ agent.dir }}</p>
                        <p class="bold">{{ agent.job }}</p>
                        <p class="md:mb-10">Codigo Ministerio de vivienda: {{ agent.cod }}</p>
                        <div class="full-divider block md:hidden mt-5"></div>
                        <div class="flex flex-row flex-wrap md:hidden">
                            <div class="w-1/2 self-center">
                                <p class="my-3">Valoración del agente</p>
                            </div>
                            <div class="w-1/2 self-center">
                                <div class="w-full flex flex-row justify-center">
                                    <w-btn
                                        :icon="true"
                                        v-for="i in 5"
                                        :key="i"
                                        :disabled="true"
                                        style="margin: 2px;"
                                    >
                                        <w-icon
                                            :icon="agent.stars >= i ? 'star-brown' : 'star-grey'"
                                            h="14px"
                                        ></w-icon>
                                    </w-btn>
                                </div>
                            </div>
                            <div class="w-full">
                                <div
                                    class="w-full flex flex-row justify-start mb-5"
                                    style="margin-left: -6px;"
                                >
                                    <w-btn :icon="true">
                                        <w-icon icon="mail-grey" h="12px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="facebook-grey" h="15px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="linkedin-grey" h="17px"></w-icon>
                                    </w-btn>
                                    <w-btn :icon="true">
                                        <w-icon icon="twitter-grey" h="15px"></w-icon>
                                    </w-btn>
                                </div>
                            </div>
                        </div>
                        <div class="full-divider block md:hidden mb-5"></div>
                        <div class="flex flex-row flex-wrap">
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Cel.</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <p>{{ agent.cel }}</p>
                            </div>
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Email</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <p>{{ agent.email }}</p>
                            </div>
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Acerca de mi</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <p>{{ agent.description }}</p>
                            </div>
                        </div>
                        <div class="flex flex-row flex-wrap">
                            <div
                                class="w-1/2 md:w-1/4 info-card-container"
                                v-for="(t, i) in agent.transacciones"
                                :key="i"
                            >
                                <div class="info-card">
                                    <p class="bold">{{ t.name }}</p>
                                    <p class="title">{{ t.n }}</p>
                                    <div class="flex flex-row">
                                        <p>{{ t.state }} {{ t.percentaje }}</p>
                                        <div v-if="t.state == 'up'" class="arrow-up"></div>
                                        <div v-if="t.state == 'down'" class="arrow-down"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </w-card>
        </div>
        <!-- ULTIMOS INGRESOS -->
        <div class="flex flex-row justify-center mt-20">
            <w-btn :outlined="true" color="tertiary">
                <p class="body bold">ÚLTIMOS INGRESOS</p>
            </w-btn>
        </div>
        <w-carousel
            class="mt-10"
            :items="windowWidth >= 768 ? 3 : 1"
            :pagination="windowWidth < 768"
            :navigation="windowWidth >= 768"
        >
            <slide v-for="(card, i) in cards" :key="i">
                <div class="px-5">
                    <w-card :image="card.image" hover="full-hover">
                        <template slot="image">
                            <p class="bold">{{ card.direccion }}</p>
                            <p class="mt-5">{{ card.descripcion }}</p>
                        </template>
                        <template slot="state">
                            <p class="white-text">{{ card.tipo }}</p>
                        </template>
                        <p class="bold">{{ card.title }}</p>
                        <p>{{ card.body }}</p>
                        <p>Comisión</p>
                        <div class="flex flex-row justify-between">
                            <p class="body bold">{{ card.comision }}</p>
                            <p class="body bold tertiary-text">{{ card.mes }}</p>
                        </div>

                        <template slot="footer">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row justify-between">
                                    <div class="info-item">
                                        <w-icon icon="room-solid" h="12px"></w-icon>
                                        <p class="white-text">{{ card.info.habitaciones }}</p>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="bath-solid" h="15px"></w-icon>
                                        <p class="white-text">{{ card.info.baños }}</p>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="parking-solid" h="12px"></w-icon>
                                        <p class="white-text">{{ card.info.estacionamiento }}</p>
                                    </div>
                                </div>
                                <div class="info-item">
                                    <w-icon icon="size" h="15px"></w-icon>
                                    <p class="white-text">{{ card.info.tamaño }}</p>
                                </div>
                            </div>
                        </template>
                    </w-card>
                </div>
            </slide>
        </w-carousel>

        <!-- MAS DESTACADOS -->
        <div class="flex flex-row justify-center mt-5">
            <w-btn :outlined="true" color="tertiary">
                <p class="body bold">
                    <span class="secondary-text">+</span> MÁS DESTACADOS
                </p>
            </w-btn>
        </div>
        <w-carousel
            class="mt-10"
            :background="windowWidth >= 768 ? '/images/banners/1.png' : ''"
            :items="windowWidth >= 768 ? 3 : 1"
            :pagination="windowWidth < 768"
            :navigation="windowWidth >= 768"
        >
            <slide v-for="(card, i) in cards" :key="i">
                <div class="px-5">
                    <w-card :image="card.image" hover="full-hover">
                        <template slot="image">
                            <p class="bold">{{ card.direccion }}</p>
                            <p class="mt-5">{{ card.descripcion }}</p>
                        </template>
                        <template slot="state">
                            <p class="white-text">{{ card.tipo }}</p>
                        </template>
                        <p class="bold">{{ card.title }}</p>
                        <p>{{ card.body }}</p>
                        <p>Comisión</p>
                        <div class="flex flex-row justify-between">
                            <p class="body bold">{{ card.comision }}</p>
                            <p class="body bold tertiary-text">{{ card.mes }}</p>
                        </div>

                        <template slot="footer">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row justify-between">
                                    <div class="info-item">
                                        <w-icon icon="room-solid" h="12px"></w-icon>
                                        <p class="white-text">{{ card.info.habitaciones }}</p>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="bath-solid" h="15px"></w-icon>
                                        <p class="white-text">{{ card.info.baños }}</p>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="parking-solid" h="12px"></w-icon>
                                        <p class="white-text">{{ card.info.estacionamiento }}</p>
                                    </div>
                                </div>
                                <div class="info-item">
                                    <w-icon icon="size" h="15px"></w-icon>
                                    <p class="white-text">{{ card.info.tamaño }}</p>
                                </div>
                            </div>
                        </template>
                    </w-card>
                </div>
            </slide>
        </w-carousel>
        <br />
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            img: "images/rostros/2.png",
            imagwn: "images/banners/1.png",
            agent: {
                name: "Peter Llanos Barnachea",
                dir: "Lima / San Borja",
                job: "Titanio Inversiones Inmobiliarias, SAC",
                cod: 382358412,
                description:
                    "Persona comprometida... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                img: "images/rostros/1.png",
                cel: 5194641341,
                email: "rs@agenlesasociados.com",
                stars: 4,
                transacciones: [
                    {
                        name: "Transacciones",
                        n: 200,
                        state: "up",
                        percentaje: "3%"
                    },
                    {
                        name: "Activas",
                        n: 25,
                        state: "down",
                        percentaje: "1%"
                    },
                    {
                        name: "Cancelada",
                        n: 10
                    }
                ]
            },
            cards: [
                {
                    tipo: "Alquiler",
                    image: "/images/departamentos/1.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/2.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/3.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/4.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/5.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/6.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/7.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/8.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/9.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                }
            ]
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        showForm() {
            console.log(this.form);
        }
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.agente-container {
    width: 90%;
    margin: auto;

    .divider {
        height: 0px;
        width: 32px;
        border: thin solid $tertiary;
    }

    .full-divider {
        height: 0px;
        width: 100%;
        border: thin solid rgba($color: $primary, $alpha: 0.12);
    }
    .info-card-container {
        padding: 10px;
        .info-card {
            background-color: #2f3a4a;
            border-radius: 7px;
            padding: 12px 20px;
            color: white;
            height: 100%;
            .arrow-up {
                height: 13px;
                width: 13px;
                border: 2px solid #56d837;
                border-top: none;
                border-left: none;
                margin: 8px 0px 0px 12px;
                transform: rotate(-135deg);
            }
            .arrow-down {
                height: 13px;
                width: 13px;
                border: 2px solid #ff0000;
                border-left: none;
                border-bottom: none;
                margin: 0px 0px 8px 12px;
                transform: rotate(135deg);
            }
        }
    }
}

@media (max-width: 764px) {
    .agente-container {
        width: 95%;
        font-size: 12px;
        .info-card-container {
            padding: 5px;
        }
    }
}
</style>
