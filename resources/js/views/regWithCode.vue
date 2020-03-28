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
                  @click="reg=!reg"
                  :class=" reg ? 'justify-start' : 'justify-end'"
                  class="m-1 lg:m-5 bg-orange-500 rounded-full border-grey flex items-center cursor-pointer w-10"
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

            <!-- Switch on  -->
            <div v-if="reg" class="mt-10">
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

            <!-- Switch off  -->
            <div v-if="!reg" class="mt-10">
              <form>
                <div class="lg:flex items-center">
                  <w-input class="w-full p-5" label="Código MVCS"></w-input>
                  <button
                    class="flex w-full lg:ml-5 justify-center items-center tertiary text-white py-3 rounded-full lg:mt-5"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="h-5 w-5 svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                    <span class="text-md ml-2 uppercase">Buscar</span>
                  </button>
                </div>

                <div class="primary text-white caption rounded-lg my-5">
                  <p
                    class="p-5 text-center lg:text-left"
                  >* Usted eligio la empresa: {{empresa.nombre}}</p>
                </div>
                <div class="bg-gray-200 my-5 rounded-lg p-5 caption">
                  <p>Empresa: {{empresa.nombre}}</p>
                  <p>Estado: {{empresa.estado}}</p>
                  <p>Codigo: {{empresa.cod}}</p>
                </div>
                <div class="lg:flex mt-5">
                  <w-input class="w-full p-5" label="Primer Nombre"></w-input>
                  <w-input class="w-full p-5" label="Segundo Nombre"></w-input>
                </div>
                <div class="lg:flex mt-5">
                  <w-input class="w-full p-5" label="Apellido Paterno"></w-input>
                  <w-input class="w-full p-5" label="Apellido Materno"></w-input>
                </div>
                <w-input class="w-full p-5 mt-5" label="Ingresar correo electrónico"></w-input>
                <w-input class="w-full p-5 mt-5" label="Ingresar documento de identidad"></w-input>
                <div class="w-11/12 mx-auto mt-10">
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
                <div class="flex justify-center">
                  <w-btn color="tertiary" :dark="true" class="w-full lg:w-1/4">Registrar</w-btn>
                </div>
              </form>
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
      reg: false,
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
