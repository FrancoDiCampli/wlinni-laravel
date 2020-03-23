<template>
    <div>
        <div class="container m-auto rounded-lg overflow-hidden shadow-lg">
            <!-- PAGINAS 22 - 24 -->

            <div class="flex-wrap">
                <div
                    class="flex justify-center tracking-wide pl-12 lg:pl-0 font-bold text-4xl"
                >
                    Precios de suscripción
                </div>
                <div class="flex-wrap">
                    <div class="my-8">
                        <w-carousel :items="1" :pagination="true">
                            <slide v-for="item in cards1" :key="item.i">
                                <div class="carousel-item">
                                    <div
                                        class="w-auto rounded-lg overflow-hidden shadow-lg"
                                    >
                                        <div
                                            class="flex justify-center primary"
                                        >
                                            <p class="text-white p-4">
                                                {{ item.tipo }}
                                            </p>
                                        </div>
                                        <div
                                            class="flex justify-center text-tertiary"
                                        >
                                            <div class="flex items-start">
                                                <h1
                                                    class="text-4xl font-bold mt-3"
                                                >
                                                    S/
                                                </h1>
                                                <h1 class="text-6xl font-bold">
                                                    {{ item.tarifa }}
                                                </h1>
                                            </div>
                                        </div>
                                        <div class="flex justify-center mb-8">
                                            <h1 class="text-sm font-bold">
                                                MENSUAL
                                            </h1>
                                        </div>
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            10 propiedades
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            3 agentes
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            8 destacados
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            Propiedades destacadas
                                        </h1>
                                        <div class="flex justify-center">
                                            <w-btn
                                                class="large block justify-center my-6"
                                                :color="$wlinii.tertiary"
                                                >NUEVA PUBLICACIÓN</w-btn
                                            >
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </w-carousel>
                    </div>

                    <div class="my-8">
                        <w-carousel :items="1" :pagination="true">
                            <slide v-for="item in cards2" :key="item.i">
                                <div class="carousel-item">
                                    <div
                                        class="w-auto rounded-lg overflow-hidden shadow-lg"
                                    >
                                        <div
                                            class="flex justify-center primary"
                                        >
                                            <p class="text-white p-4">
                                                {{ item.tipo }}
                                            </p>
                                        </div>
                                        <div
                                            class="flex justify-center text-tertiary"
                                        >
                                            <div class="flex items-start">
                                                <h1
                                                    class="text-4xl font-bold mt-3"
                                                >
                                                    S/
                                                </h1>
                                                <h1 class="text-6xl font-bold">
                                                    {{ item.tarifa }}
                                                </h1>
                                            </div>
                                        </div>
                                        <div class="flex justify-center mb-8">
                                            <h1 class="text-sm font-bold">
                                                MENSUAL
                                            </h1>
                                        </div>
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            10 propiedades
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            3 agentes
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            8 destacados
                                        </h1>
                                        <hr
                                            class="border-b-1 border-gray-500 mx-10 my-2"
                                        />
                                        <h1
                                            class="flex justify-center text-sm my-2"
                                        >
                                            Propiedades destacadas
                                        </h1>
                                        <div class="flex justify-center">
                                            <w-btn
                                                class="large block justify-center my-6"
                                                :color="$wlinii.tertiary"
                                                >NUEVA PUBLICACIÓN</w-btn
                                            >
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </w-carousel>
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
    }
};
</script>

<style></style>
