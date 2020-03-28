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
                <span class="xxs body-lg lg:text-lg lg:uppercase">
                  Registrados MVCS/
                  <span
                    class="text-orange-600 font-normal lg:font-bold mr-5"
                  >Asesores Inmobiliarias</span>
                </span>

                <span
                  class="lg:m-5 bg-orange-500 rounded-full border-grey flex items-center cursor-pointer w-10 justify-end"
                >
                  <span class="rounded-full w-5 h-5 shadow-inner bg-white shadow"></span>
                </span>
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
