<template>
  <div class="bg-gray-300 lg:p-10">
    <div class="w-full bg-gray-300 lg:bg-white lg:w-10/12 rounded-lg lg:p-10 mx-auto">
      <div>
        <h1 class="subtitle-xs title-lg bold text-center lg:text-left">Notificaciones</h1>
        <p class="hidden lg:block caption">Se tiene {{notificaciones}} notificaciones</p>
      </div>

      <div id="users" class="lg:flex lg:bg-gray-200 mt-10 rounded-lg items-center p-0 lg:p-5">
        <div class="lg:w-2/12 flex justify-start items-center order-2">
          <img
            class="h-20 lg:h-12 mx-5 w-auto border-2 rounded-full border-orange-500"
            src="/img/rostros/2.png"
            alt
          />
          <h1 class="caption-lg body-xs bold">Juan Perez</h1>
        </div>
        <div class="lg:w-6/12 ml-20 px-10 lg:ml-0 order-3">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit</p>
        </div>
        <div class="flex lg:block w-full lg:w-1/12 order-4 ml-20 px-10 lg:ml-0 lg:p-0 bold-xs">
          <p>Hace</p>
          <span>2 dias</span>
        </div>
        <div class="w-full pl-24 lg:p-0 lg:w-3/12 flex item-center order-1">
          <w-btn class="rounded" :dark="true">Guardar</w-btn>
          <div class="flex items-center">
            <svg
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
      img: "img/rostros/1.png",
      notificaciones: 12,
      users: [
        {
          name: "David Nester",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 2,
          img: "img/rostros/2.png",
          state: "Guardar",
          stars: 2
        },
        {
          name: "Jorge Rodriguez Nester",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 3,
          img: "img/rostros/3.png",
          state: "Finalizado",
          stars: 2
        },
        {
          name: "German Escobar",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
          days: 5,
          img: "img/rostros/4.png",
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
.bn {
  border: 1px solid black;
}
.bg-img {
  background-image: url("/img/banners/3.png");
}
.test {
  height: 200px;
}
.bg-test {
  background-color: rgba(0, 0, 0, 0.6); /* rgbA */
}
</style>
