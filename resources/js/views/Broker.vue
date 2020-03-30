<template>
  <div>
    <div class="bg-gray-200 py-5">
      <div class="pt-5 lg:p-20 w-11/12 rounded-lg bg-white lg:mt-10 mx-auto">
        <!-- Seccion perfil broker con img  -->
        <div class="flex justify-between">
          <!-- Esta imagen desaparece en mobil  -->
          <div class="hidden lg:block w-1/3">
            <img style="height:400px" class="w-auto" src="/img/banners/3.png" alt />
          </div>
          <!-- Texto  -->
          <div class="w-4/5 lg:w-2/3 lg:mx-10 mx-auto">
            <h1 class="text-sm font-bold tracking-widest">PERFIL BROKER</h1>
            <div class="border-t-2 tertiary w-2/12 my-5"></div>
            <div class="flex items-center justify-between">
              <h1 class="fan subtitle-lg bold">Empresa Golden Star</h1>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                class="hidden lg:block h-8 svg-inline--fa fa-info-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                />
              </svg>
            </div>
            <p class="text-sm lg:font-bold my-4">Lima / Miraflores</p>
            <div class="hidden lg:block border-t w-full border-gray-600"></div>
            <img class="lg:hidden" src="img/banners/3.png" alt />
            <div class="my-5 lg:flex">
              <h3 class="tertiary-text font-bold lg:w-1/4 tertiary-text">Cel:</h3>
              <p class="lg:font-semibold lg:w-3/4">+51 9 5612522892</p>
            </div>
            <div class="my-5 lg:flex">
              <h3 class="tertiary-text font-bold lg:w-1/4">Email:</h3>
              <p class="lg:font-semibold lg:w-3/4">yo@mail.com</p>
            </div>
            <div class="my-5 lg:flex">
              <h3 class="tertiary-text font-bold lg:w-1/4">Descripcion:</h3>
              <p
                class="lg:font-semibold lg:w-3/4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nihil aspernatur cupiditate. Nam, incidunt. Sit veniam corrupti repudiandae quam nulla consectetur perspiciatis cum dignissimos saepe laborum. Autem vitae pariatur ea.</p>
            </div>
          </div>
        </div>
        <!-- End Seccion perfil broker con img -->
        <!-- Sociales  -->
        <div class="mt-5 text-gray-600 flex ml-10 items-center justify-around lg:justify-start">
          <router-link to="/">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="envelope"
              class="mr-5 h-6 svg-inline--fa fa-envelope fa-w-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              />
            </svg>
          </router-link>

          <router-link to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="mr-5 h-6 svg-inline--fa fa-facebook-f fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </router-link>
          <router-link to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="mr-5 h-6 svg-inline--fa fa-linkedin-in fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </router-link>
          <router-link to="/">
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="twitter"
              class="mr-5 h-6 svg-inline--fa fa-twitter fa-w-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.72c.33 4.54.33 9.1.33 13.64 0 138.72-105.59 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84a105.12 105.12 0 01-98.1-72.77c6.49.97 12.99 1.62 19.81 1.62 9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0120.8 195.57v-1.3a105.68 105.68 0 0047.43 13.32 104.86 104.86 0 01-46.78-87.39c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 00216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03 0-57.83 46.78-104.94 104.94-104.94 30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0066.6-25.34 104.65 104.65 0 01-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 01-52.63 54.26z"
              />
            </svg>
          </router-link>
        </div>

        <h1 class="mt-10 mx text-center body bold lg:text-left">Asesores Inmobiliarios</h1>

        <!-- Table de Asesores inmobiliarios  -->

        <div
          class="hidden bg-gray-200 w-10/12 lg:w-full mx-auto mt-5 rounded-lg p-5 lg:flex lg:items-center"
          v-for="user in users"
          :key="user.name"
        >
          <div
            :class="[user.state =='Desafiliar' ? selected :  '']"
            class="flex items-center justify-center lg:order-3 lg:w-2/12 p-5"
          >
            <img
              class="mr-3 h-12 w-auto border-2 rounded-full border-orange-500"
              src="img/rostros/4.png"
              alt
            />
            <h1 class="font-bold">{{user.name}}</h1>
          </div>
          <p
            class="text-xs text-center p-5 lg:order-4 lg:w-5/12 font-semibold lg:text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas sequi cumque delectus provident voluptatibus unde nobis adipisci dolore.</p>

          <div class="flex mx-auto justify-center lg:order-2 lg:mx-5 lg:w-2/12">
            <svg
              v-for="star in user.stars"
              :key="star"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="star"
              class="h-4 tertiary-text svg-inline--fa fa-star fa-w-18 t-brown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
            <svg
              v-for="i in (5-user.stars)"
              :key="i*5"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="star"
              class="h-4 svg-inline--fa fa-star fa-w-18 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </div>
          <p class="text-sm text-center my-5 lg:order-5 lg:w-1/12" v-if="user.state=='Desafiliar'">
            Estado:
            <span class="text-green-600 font-semibold">AFILIADO</span>
          </p>
          <p class="text-sm text-center my-5 lg:order-5 lg:w-1/12" v-else>Sin afiliar</p>

          <div class="text-center lg:order-1 lg:w-2/12">
            <router-link
              to="/"
              class="text-white text-sm px-10 py-2 rounded-full lg:px-8"
              :class="[user.state =='Desafiliar' ? activeClass :  errorClass]"
            >{{user.state}}</router-link>
          </div>
        </div>

        <!-- End Table de Asesores inmobiliarios  -->

        <!-- pagination  -->

        <div class="lg:flex justify-end items-center mt-10 hidden">
          <router-link to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              class="h-5 svg-inline--fa fa-chevron-left fa-w-10 mr-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              />
            </svg>
          </router-link>

          <router-link to="/" class="rounded-full bg-blue-900 p-2 px-3 text-white text-lg">01</router-link>
          <router-link to="/" class="rounded-full p-2 px-3 text-blue-900 text-lg">02</router-link>
          <router-link to="/" class="rounded-full p-2 px-3 text-blue-900 text-lg">03</router-link>

          <router-link to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              class="h-5 svg-inline--fa fa-chevron-right fa-w-10 ml-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
            </svg>
          </router-link>
        </div>

        <!-- end pagination  -->

        <div class="block lg:hidden">
          <w-carousel :items="1" :pagination="true" :navigation="false">
            <slide v-for="user in users" :key="user.name">
              <div class="carousel-item bg-gray-200 p-5 rounded-lg">
                <div
                  class="flex justify-center items-center p-5"
                  :class="[user.state =='Desafiliar' ? selected :  '']"
                >
                  <img
                    class="mr-3 h-12 w-auto border-2 rounded-full border-orange-500"
                    :src="user.img"
                    alt
                  />
                  <h1 class="body bold">{{user.name}}</h1>
                </div>

                <p class="caption text-center p-5">{{user.description}}</p>

                <div class="flex mx-auto justify-center">
                  <svg
                    v-for="star in user.stars"
                    :key="star"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="star"
                    class="h-4 tertiary-text svg-inline--fa fa-star fa-w-18 t-brown"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                  <svg
                    v-for="i in (5-user.stars)"
                    :key="i*5"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="star"
                    class="h-4 svg-inline--fa fa-star fa-w-18 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </div>
                <p class="text-sm text-center my-5" v-if="user.state=='Guardar'">
                  Estado:
                  <span class="text-green-600 font-semibold">AFILIADO</span>
                </p>
                <p class="text-sm text-center my-5" v-else>Sin afiliar</p>
                <div class="text-center p-5">
                  <router-link
                    to="/"
                    :class="[user.state =='Desafiliar' ? activeClass :  errorClass]"
                    class="text-white text-sm px-10 py-2 rounded-full"
                  >{{user.state}}</router-link>
                </div>
              </div>
            </slide>
          </w-carousel>
        </div>
      </div>
    </div>
    <!-- Mas destacados  -->
    <div class="flex justify-center">
      <w-btn :outlined="true" color="tertiary" class>
        <span class="body bold">Mas destacados</span>
      </w-btn>
    </div>
    <div>
      <w-carousel
        :background="imagwn"
        :pagination="true"
        :items="windowWidth <= 764 ? 1 : 3"
        :navigation="false"
      >
        <slide v-for="item in destacados" :key="item.cod1">
          <div class="carousel-item pt-5">
            <w-card :image="item.img" hover="full-hover" state="runded" style>
              <template slot="image">
                <p class="caption bold">{{item.cod1}}</p>
                <p class="caption bold">{{item.cod2}}</p>
                <br />
                <br />
                <p class="caption">{{item.descripcion}}</p>
                <p class="caption secondary-text">Agregado hace: {{item.dias}} días atras</p>
              </template>
              <template slot="state">
                <router-link
                  to="/"
                  class="text-white text-sm px-10 py-2 lg:px-8 secondary"
                >{{item.estado}}</router-link>
              </template>

              <!-- CONTENIDO DE LA TARJETA -->
              <div>
                <p class="body bold">{{item.direccion}}</p>
                <p class="caption">{{item.localidad}}</p>
                <br />

                <div class="flex justify-between items-center">
                  <div>
                    <p class="caption">Comisión</p>
                    <p class="body bold">{{item.comision}}</p>
                  </div>
                  <div class="body bold tertiary-text">
                    <p>Mes</p>
                    <p>S/{{item.precio}}</p>
                  </div>
                </div>
              </div>
              <template slot="footer">
                <div class="flex justify-between">
                  <div class="info-item">
                    <w-icon icon="room-solid" h="12px"></w-icon>
                    <p class="caption white-text">{{item.habitaciones}}</p>
                  </div>
                  <div class="info-item">
                    <w-icon icon="bath-solid" h="12px"></w-icon>
                    <p class="caption white-text">{{item.banios}}</p>
                  </div>
                  <div class="info-item">
                    <w-icon icon="parking-solid" h="12px"></w-icon>
                    <p class="caption white-text">{{item.cochera}}</p>
                  </div>
                  <div class="info-item">
                    <w-icon icon="size" h="12px"></w-icon>
                    <p class="caption white-text">{{item.metros}}</p>
                  </div>
                </div>
              </template>
            </w-card>
          </div>
        </slide>
      </w-carousel>
      <div class="flex justify-center">
        <w-btn :large="true" :dark="true">ver mas propiedades</w-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      img: "img/rostros/2.png",
      imagwn: "img/banners/1.png",
      users: [
        {
          name: "David Nester",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 3,
          img: "img/rostros/1.png",
          state: "Desafiliar",
          stars: 2
        },
        {
          name: "David Gonzales",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 2,
          img: "img/rostros/1.png",
          state: "Afiliar",
          stars: 4
        }
      ],
      destacados: [
        {
          cod1: "BUILT-UP-65 SQ FT",
          cod2: "LAND SIZE-110 SQ FT",
          descripcion:
            "Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          dias: 5,
          img: "img/departamentos/1.jpg",
          estado: "Alquiler",
          direccion: "958 Calle Montreal",
          localidad: "Lima / Perú",
          comision: "5%",
          precio: "2500 ",
          habitaciones: 3,
          banios: 2,
          cochera: 2,
          metros: 180
        },
        {
          cod1: "BUILT-UP-66 SQ FT",
          cod2: "LAND SIZE-110 SQ FT",
          descripcion:
            "Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          dias: 5,
          img: "img/departamentos/2.jpg",
          estado: "Alquiler",
          direccion: "958 Calle Montreal",
          localidad: "Lima / Perú",
          comision: "5%",
          precio: "2500 ",
          habitaciones: 3,
          banios: 2,
          cochera: 2,
          metros: 180
        },
        {
          cod1: "BUILT-UP-75 SQ FT",
          cod2: "LAND SIZE-110 SQ FT",
          descripcion:
            "Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          dias: 5,
          img: "img/departamentos/3.jpg",
          estado: "Alquiler",
          direccion: "958 Calle Montreal",
          localidad: "Lima / Perú",
          comision: "5%",
          precio: "2500 ",
          habitaciones: 3,
          banios: 2,
          cochera: 2,
          metros: 180
        },
        {
          cod1: "BUILT-UP-756 SQ FT",
          cod2: "LAND SIZE-110 SQ FT",
          descripcion:
            "Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          dias: 5,
          img: "img/departamentos/3.jpg",
          estado: "Alquiler",
          direccion: "958 Calle Montreal",
          localidad: "Lima / Perú",
          comision: "5%",
          precio: "2500 ",
          habitaciones: 3,
          banios: 2,
          cochera: 2,
          metros: 180
        }
      ],
      activeClass: "secondary",
      errorClass: "accent",
      selected: "bg-blue-900 text-white rounded-lg"
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", (this.windowWidth = window.innerWidth));
    });
  }
};
</script>

<style lang="scss">
.bn {
  border: 1px solid black;
}
</style>
