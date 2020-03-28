<template>
  <div>
    <div class="container">
      <div class="bg-img">
        <div class="contenedor w-11/12 lg:w-10/12 mx-auto p-5 lg:p-10">
          <div class="text-white flex justify-between items-center flex-wrap">
            <h1 class="subtitle-xs title-lg bold w-2/3 lg:w-full">Registro</h1>
            <router-link
              to="/"
              class="caption w-1/3 lg:w-full lg:order-3 lg:mt-5 lg:text-lg"
            >Crear una cuenta</router-link>
            <div class="border-t-2 tertiary-border w-2/12 mt-5 lg:w-1/12 lg:mt-2"></div>
          </div>

          <!-- Contenedor del form  -->
          <div class="bg-white mt-10 py-5 px-5 lg:px-20 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="xxs body-lg lg:uppercase">
                  Registrados MVCS/
                  <span class="secondary-text">Asesores Inmobiliarias</span>
                </span>

                <span
                  class="m-1 lg:m-5 bg-orange-500 rounded-full border-grey flex items-center cursor-pointer w-10 justify-end"
                >
                  <span class="rounded-full w-5 h-5 shadow-inner bg-white shadow"></span>
                </span>
              </div>
              <div>
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
            </div>
            <div class="border-t border-gray-500 w-full my-5"></div>
            <h1 class="caption text-center bold lg:text-left lg:ml-10">INGRESAR NUEVO USUARIO</h1>

            <div class="mt-10">
              <form>
                <w-input label="Código MVCS" class="m-5"></w-input>
                <w-input label="Número Teléfono" class="m-5"></w-input>
                <div class="w-11/12 mx-auto">
                  <p class="caption">Ingresar una breve descripcion</p>

                  <textarea
                    class="caption p-3 lg:p-5 w-full rounded-lg outline-none border border-gray-500"
                    name
                    id
                    cols="30"
                    rows="5"
                    placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
                  ></textarea>
                </div>
              </form>
              <div>
                <w-btn class="full-width" color="tertiary" :dark="true">regitrar</w-btn>
              </div>
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
      empresa: {
        nombre: "Corredores Peru SAC",
        estado: "Activo",
        cod: 2039021323
      }
    };
  },
  methods: {
    showAlert() {},
    hideAlert() {}
  }
};
</script>
<style >
.l-50 {
  left: 35%;
}
.bn {
  border: 1px solid black;
}
.bg-img {
  background-image: url("/img/banners/3.png");
}
</style>
