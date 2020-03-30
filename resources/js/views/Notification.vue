<template>
  <div>
    <header-nav></header-nav>

    <div class="bg-gray-300 lg:bg-white lg:w-4/5 lg:mx-auto">
      <h1 class="font-bold text-3xl text-center lg:text-left">Notificaciones</h1>
      <p class="hidden lg:block">Tiene {{notificaciones}} notificaciones</p>

      <!-- Final res  -->

      <div
        class="bg-gray-300 lg:rounded-lg lg:flex items-center lg:py-5 lg:my-5"
        v-for="user in users"
        :key="user.name"
      >
        <div id="ilustration" class="lg:order-2 mt-5 flex justify-start items-start">
          <img
            class="h-12 mx-5 ml-10 lg:order2 w-auto border-2 rounded-full border-orange-500"
            src="img/rostros/2.png"
            alt
          />
          <h1 class="font-bold">{{user.name}}</h1>
        </div>
        <div class="lg:order-3 ml-20 pl-5 text-sm mr-5">
          <p class>{{user.description}}</p>
        </div>
        <div class="lg:order-4 ml-20 pl-5 my-5 lg:p-0 lg:w-1/3">
          <p class="font-bold lg:font-normal">Hace {{user.days}} dias</p>
        </div>
        <div
          class="lg:order-1 ml-20 pl-5 flex items-center justify-between lg:w-4/5 lg:ml-0"
          id="btns"
        >
          <router-link
            to="/"
            class="text-white px-5 py-1 rounded-full"
            :class="[user.state =='Guardar' ? activeClass :  errorClass]"
          >{{user.state}}</router-link>
          <div class="flex mr-10">
            <svg
              v-for="star in user.stars"
              :key="star"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="star"
              class="h-4 svg-inline--fa fa-star fa-w-18 t-brown"
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
              class="h-4 svg-inline--fa fa-star fa-w-18 text-gray-100"
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
        <div class="lg:hidden border-t border-gray-700 w-4/5 mx-auto my-5"></div>
      </div>

      <!-- final end res  -->

      <!-- Pagination -->
      <div class="lg:flex justify-end items-center mt-10 hidden">
        <router-link to="/">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            class="h-6 svg-inline--fa fa-chevron-left fa-w-10 mr-5"
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

        <router-link to="/" class="rounded-full bg-blue-900 px-6 py-3 m-2 text-white text-2xl">1</router-link>

        <router-link to="/">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            class="h-6 svg-inline--fa fa-chevron-right fa-w-10 ml-5"
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
    </div>

    <footer-all></footer-all>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: "img/rostros/1.png",
      notificaciones: 12,
      users: [
        {
          name: "David Nester",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 2,
          img: "img/rostros/1.png",
          state: "Guardar",
          stars: 2
        },
        {
          name: "Jorge Rodriguez Nester",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 3,
          img: "img/rostros/2.png",
          state: "Finalizado",
          stars: 2
        },
        {
          name: "German Escobar",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 5,
          img: "img/rostros/3.png",
          state: "Finalizado",
          stars: 4
        }
      ],
      activeClass: "bg-orange-500",
      errorClass: "bg-blue-500"
    };
  }
};
</script>
<style scoped>
.bg-img {
  background-image: url("/img/banners/3.jpg");
  height: 180vh;
}
.test {
  height: 200px;
}
.bg-test {
  background-color: rgba(0, 0, 0, 0.6); /* rgbA */
}
</style>
