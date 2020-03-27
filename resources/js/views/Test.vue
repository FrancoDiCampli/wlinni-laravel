<template>
  <div class="bg-gray-200 p-5">
    <div class="p-5 w-11/12 rounded-lg bg-white">
      <h1 class="caption bold pb-3">PERFIL AGENTES</h1>
      <div class="border-t-2 tertiary-border w-1/12"></div>
      <img class="py-5" :src="user.img" alt="User" />
      <h1 class="subtitle bold">{{user.name}}</h1>
      <p class="caption">{{user.dir}}</p>
      <p class="caption bold">{{user.job}}</p>
      <p class="caption">{{user.mat}}</p>
      <div class="flex items-center">
        <p class="caption">Valoracion del agente</p>
        <div class="flex">
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
        </div>
      </div>
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
      <div class="border-t-2 border-gray-300"></div>
      <div class="my-5 lg:flex">
        <h3 class="tertiary-text font-bold lg:w-1/4 tertiary-text">Cel:</h3>
        <p class="caption">{{user.cel}}</p>
      </div>
      <div class="my-5 lg:flex">
        <h3 class="tertiary-text font-bold lg:w-1/4">Email:</h3>
        <p class="caption">{{user.email}}</p>
      </div>
      <div class="my-5 lg:flex">
        <h3 class="tertiary-text font-bold lg:w-1/4">Acerca de mi:</h3>
        <p class="caption">{{user.about}}</p>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="bg-blue-900 text-white rounded-lg p-3 w-5/12 m-1">
          <p class="caption bold">Transacciones</p>
          <p class="title">{{user.trans}}</p>
          <p>UP 3%</p>
        </div>
        <div class="bg-blue-900 text-white rounded-lg p-3 w-5/12 m-1">
          <p class="caption bold">Activas</p>
          <p class="title">{{user.active}}</p>
          <p>DOWN 1%</p>
        </div>
        <div class="bg-blue-900 text-white rounded-lg p-3 w-5/12 m-1">
          <p class="caption bold">Canceladas</p>
          <p class="title">{{user.canceled}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Peter Llanos Barnachea",
        dir: "Lima / San Borja",
        img: "img/rostros/4.png",
        job: "Titanio Inversiones Inmobiliarias, SAC",
        mat: "Codigo Ministerio de vivienda: 382358412",
        cel: "+51 94641341",
        email: "rs@agenlesasociados.com",
        about:
          "Persona comprometida... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
        stars: 5,
        trans: 200,
        active: 25,
        canceled: 10
      }
    };
  }
};
</script>

<style>
</style>
