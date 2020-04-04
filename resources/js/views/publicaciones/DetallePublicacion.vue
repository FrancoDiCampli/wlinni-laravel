<template>
    <div class="bg-gray-300">
        <!-- Paginas 20 - 23 -->

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">
                <div
                    class="flex-wrap lg:flex justify-start lg:justify-between items-center p-4 lg:p-16"
                >
                    <div
                        class="flex w-32 order-1 caption justify-center secondary white-text px-4 py-2"
                    >
                        Comisión
                        <h1 class="caption bold pl-2">5%</h1>
                    </div>
                    <div class>
                        <h1 class="subtitle bold">Torre valdelomar</h1>
                        <h1 class="caption">
                            Av. Montreal 2178 - Lima / MIralfores
                        </h1>
                    </div>
                </div>

                <div class="flex-wrap">
                    <!-- No estaria funcionando la clase order wn lg -->
                    <div class="lg:order-1">
                        <w-carousel :items="1" :pagination="true">
                            <slide v-for="item in fotos" :key="item.i">
                                <div
                                    class="flex grid-cols-2 justify-between absolute"
                                >
                                    <div>
                                        <h1
                                            class="w-20 caption bold secondary justify-center white-text px-4 py-2"
                                        >
                                            Alquiler
                                        </h1>
                                    </div>
                                    <!-- mostrar abajo a la derecha de la imagen en lg -->
                                    <div>
                                        <h1
                                            class="hidden w-64 lg:flex w-20 caption bold primary justify-center white-text px-8 py-4 justify-end opacity-75"
                                        >
                                            {{ item.descripcion }}
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <img :src="item.imagen" alt />
                                </div>
                            </slide>
                        </w-carousel>
                    </div>

                    <div
                        class="flex-wrap lg:flex justify-between items-center p-4 lg:p-16"
                    >
                        <div>
                            <h1 class="subtitle text-center bold tertiary-text">
                                S/ 2,399,900
                            </h1>
                        </div>
                        <div class="block lg:flex justify-around">
                            <w-btn
                                large
                                :fullwidth="windowWidth <= 734 ? true : false"
                                color="success"
                                class="flex justify-center caption bold white-text"
                            >
                                <w-icon
                                    class="pr-4"
                                    icon="twitter-white"
                                    h="16px"
                                ></w-icon
                                >WHATSAPP
                            </w-btn>
                            <w-btn
                                outlined
                                large
                                :fullwidth="windowWidth <= 734 ? true : false"
                                color="black"
                                class="flex justify-center caption bold"
                            >
                                <w-icon
                                    class="pr-4"
                                    icon="twitter-black"
                                    h="16px"
                                ></w-icon
                                >FICHA TÉCNICA
                            </w-btn>
                            <w-btn
                                outlined
                                large
                                :fullwidth="windowWidth <= 734 ? true : false"
                                color="black"
                                class="flex justify-center caption bold"
                            >
                                <w-icon
                                    class="pr-4"
                                    icon="twitter-black"
                                    h="16px"
                                ></w-icon
                                >CONSULTAR
                            </w-btn>
                        </div>
                    </div>
                </div>

                <div
                    class="flex justify-center lg:justify-start p-4 lg:px-16 lg:py-4"
                >
                    <div class="block border-r-2 px-4">
                        <div class="caption">Tipo Propiedad</div>
                        <div class="body bold">Apartamento</div>
                    </div>

                    <div class="block border-l-2 px-4">
                        <div class="caption">Publicado</div>
                        <div class="body bold">11/03/2020</div>
                    </div>
                </div>
            </w-card>
        </div>

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">
                <w-carousel
                    :items="windowWidth <= 734 ? 1 : 5"
                    :pagination="true"
                >
                    <slide v-for="item in cards" :key="item.i">
                        <div class="primary rounded-lg m-2">
                            <div class="flex-wrap justify-center p-8">
                                <div class="flex justify-center my-4">
                                    <w-icon :icon="item.icon" h="90px"></w-icon>
                                </div>
                                <div
                                    class="flex justify-center border-yellow-700 border-b-2 p-2"
                                >
                                    <h1
                                        class="caption white-text bold tracking-widest"
                                    >
                                        {{ item.name }}
                                    </h1>
                                </div>
                                <div
                                    class="flex justify-center border-yellow-700 border-t-2 p-2"
                                >
                                    <h1
                                        class="body white-text bold tracking-widest"
                                    >
                                        {{ item.number }}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </slide>
                </w-carousel>
            </w-card>
        </div>

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">
                <div class="block lg:flex lg:grid grid-cols-2 justify-between">
                    <div class="block lg:px-8">
                        <h1 class="body text-center lg:text-left bold py-4">
                            Descripción
                        </h1>
                        <div class="flex caption text-left whitespace-pre-line">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim pellentesque felis. Morbi in sem quis dui
                            placerat ornare. Pellentesque odio nisi, euismod in,
                            pharetra a, ultricies in, diam. Sed arcu. Cras
                            consequat. Praesent dapibus, neque id cursus
                            faucibus, tortor neque egestas auguae, eu vulputate
                            magna eros eu erat. Aliquam erat volutpat. Nam dui
                            mi, tincidunt quis, accumsan porttitor, facilisis
                            luctus, metus. Phasellus ultrices nulla quis nibh.
                            Quisque a lectus. Donec consectetuer ligula
                            vulputate sem tristique cursus. Nam nulla quam,
                            gravida non, commodo a, sodales sit amet, nisi.
                        </div>
                    </div>

                    <div class="block lg:px-8">
                        <h1 class="body text-center lg:text-left bold py-4">
                            Características generales
                        </h1>
                        <div class="flex caption text-left whitespace-pre-line">
                            <ul>
                                <li>• Centros Comerciales Cercanos</li>
                                <li>• Piscina</li>
                                <li>• Cerca a colegios</li>
                                <li>• Ascensor(es): 4</li>
                                <li>• Cerca Hospital</li>
                                <li>• Número de pisos: 20</li>
                                <li>• Cerca a Parque (a menos de 2 cdras)</li>
                                <li>• Parrilla</li>
                                <li>• Sala de Reuniones</li>
                                <li>• Area de lavandería</li>
                                <li>• Juegos infantiles</li>
                                <li>• Gimnasio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </w-card>
        </div>

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">
                <div class="flex-wrap lg:flex lg:justify-around">
                    <div class="flex justify-between lg:justify-between">
                        <div class="block">
                            <div class="caption">Entrega</div>
                            <div class="body bold">Diciembre 2021</div>
                        </div>
                        <div class="border-2 lg:mx-10"></div>
                        <div class="block">
                            <div class="caption">Metros techados</div>
                            <div class="body bold">40 a 105 m²</div>
                        </div>
                    </div>
                    <div class="hidden lg:block border-2"></div>
                    <div class="flex justify-between lg:justify-between">
                        <div class="block">
                            <div class="caption">Unidades</div>
                            <div class="body bold">62</div>
                        </div>
                        <div class="border-2 lg:mx-10"></div>
                        <div class="block">
                            <div class="caption">Dormitorios</div>
                            <div class="body bold">1 a 4</div>
                        </div>
                    </div>
                    <div class="hidden lg:block border-2"></div>
                    <div class="flex justify-between lg:justify-between">
                        <div class="block">
                            <div class="caption">Metros totales</div>
                            <div class="body bold">40 a 105 m²</div>
                        </div>
                        <div class="border-2 lg:mx-10"></div>
                        <div class="block">
                            <div class="caption">Estacionamientos</div>
                            <div class="body bold">-</div>
                        </div>
                    </div>
                </div>
            </w-card>
        </div>

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">
                <h1 class="body text-center lg:text-left bold">
                    Ubicación en mapa
                </h1>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum numquam nisi aliquid a debitis voluptatem sunt
                    exercitationem? Modi alias fugit ad assumenda corrupti,
                    dignissimos consequatur odio libero, tempora dolorum amet?
                </div>
            </w-card>
        </div>

        <div class="p-2 m-4 lg:m-12">
            <w-card :shadow="false">perfil</w-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            cards: [
                {
                    icon: "plans",
                    name: "AREA-T",
                    number: 120,
                },
                {
                    icon: "plans",
                    name: "AREA-C",
                    number: 180,
                },
                {
                    icon: "room-regular",
                    name: "DORMITORIOS",
                    number: 5,
                },
                {
                    icon: "bath-regular",
                    name: "BAÑO",
                    number: 3,
                },
                {
                    icon: "parking-regular",
                    name: "COCHERA",
                    number: 2,
                },
            ],
            fotos: [
                {
                    imagen: "images/departamentos/14.jpg",
                    descripcion:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, reprehenderit architecto ipsum dicta corporis iure? Voluptatibus, delectus repudiandae. Officia modi aliquam aut ducimus, atque porro eos tempora vero veniam ad?",
                },
                {
                    imagen: "images/departamentos/15.jpg",
                    descripcion:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, fuga ut eos optio minima? Eum dolorum sunt necessitatibus voluptate. Doloribus voluptatem nobis reprehenderit incidunt iste magni repellat libero nulla!",
                },
                {
                    imagen: "images/departamentos/16.jpg",
                    descripcion:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum blanditiis at similique autem aut fugit modi eum laboriosam! Exercitationem blanditiis, nulla quae dicta debitis eveniet quaerat veritatis! Ex, et?",
                },
                {
                    imagen: "images/departamentos/17.jpg",
                    descripcion:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veritatis beatae qui error architecto repellendus, fugit veniam doloribus quidem iste in consectetur omnis fuga dicta molestias suscipit modi dolor aspernatur!",
                },
                {
                    imagen: "images/departamentos/18.jpg",
                    descripcion:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rem quod nihil ipsum. Odit necessitatibus molestias illo, quibusdam a alias aliquid quasi quas. Vero molestias asperiores a reprehenderit. Accusamus, quos!",
                },
            ],
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },
};
</script>

<style></style>
