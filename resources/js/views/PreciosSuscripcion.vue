<template>
    <!-- PAGINAS 22 - 24 -->
    <div class="bg-gray-200 py-16">
        <div class="m-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="flex-wrap bg-gray-200 lg:bg-white py-8">
                <div
                    class="flex justify-center tracking-wide pl-12 lg:pl-0 font-bold text-4xl"
                >Precios de suscripción</div>
                <div class="flex-wrap">
                    <div class="my-8">
                        <div>
                            <w-carousel
                                :items="windowWidth <= 764 ? 1 : 3"
                                :pagination="true"
                                :navigation="false"
                            >
                                <slide v-for="item in cards1" :key="item.i">
                                    <div class="carousel-item">
                                        <w-card>
                                            <template slot="header">
                                                <div class="flex justify-center">
                                                    <p
                                                        class="white-text bold body p-4"
                                                    >{{ item.tipo }}</p>
                                                </div>
                                            </template>
                                            <div>
                                                <div class="flex justify-center tertiary-text">
                                                    <div class="flex items-start">
                                                        <h1 class="text-4xl bold mt-3">S/</h1>
                                                        <h1 class="text-6xl bold">{{ item.tarifa }}</h1>
                                                    </div>
                                                </div>
                                                <div class="flex justify-center mb-8">
                                                    <h1 class="caption bold">MENSUAL</h1>
                                                </div>
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >10 propiedades</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >3 agentes</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >8 destacados</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >Propiedades destacadas</h1>
                                                <div class="flex justify-center">
                                                    <w-btn
                                                        class="white-text bold justify-center"
                                                        :color="$wlinii.tertiary"
                                                        :small="true"
                                                    >suscribirse</w-btn>
                                                </div>
                                            </div>
                                        </w-card>
                                    </div>
                                </slide>
                            </w-carousel>
                        </div>
                    </div>

                    <div class="my-8">
                        <div>
                            <w-carousel
                                :items="windowWidth <= 764 ? 1 : 3"
                                :pagination="true"
                                :navigation="false"
                            >
                                <slide v-for="item in cards2" :key="item.i">
                                    <div class="carousel-item">
                                        <w-card>
                                            <template slot="header">
                                                <div class="flex justify-center">
                                                    <p
                                                        class="white-text bold body p-4"
                                                    >{{ item.tipo }}</p>
                                                </div>
                                            </template>
                                            <div>
                                                <div class="flex justify-center tertiary-text">
                                                    <div class="flex items-start">
                                                        <h1 class="text-4xl bold mt-3">S/</h1>
                                                        <h1 class="text-6xl bold">{{ item.tarifa }}</h1>
                                                    </div>
                                                </div>
                                                <div class="flex justify-center mb-8">
                                                    <h1 class="caption bold">MENSUAL</h1>
                                                </div>
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >10 propiedades</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >3 agentes</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >8 destacados</h1>
                                                <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                                <h1
                                                    class="flex justify-center caption my-2"
                                                >Propiedades destacadas</h1>
                                                <div class="flex justify-center">
                                                    <w-btn
                                                        class="white-text bold justify-center"
                                                        :color="$wlinii.tertiary"
                                                        :small="true"
                                                    >suscribirse</w-btn>
                                                </div>
                                            </div>
                                        </w-card>
                                    </div>
                                </slide>
                            </w-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,

            cards1: [
                {
                    tipo: "FREE",
                    tarifa: 0
                },
                {
                    tipo: "STANDAR",
                    tarifa: 39
                },
                {
                    tipo: "PREMIUM",
                    tarifa: 74
                }
            ],
            cards2: [
                {
                    tipo: "FREE",
                    tarifa: 80
                },
                {
                    tipo: "GOLD",
                    tarifa: 99
                },
                {
                    tipo: "PREMIUM",
                    tarifa: 106
                }
            ]
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style></style>
