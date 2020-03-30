<template>
  <div>
    <div class="container">
      <div class="bg-img">
        <div class="contenedor relative w-11/12 lg:w-10/12 mx-auto flex p-5 lg:p-10">
          <div id="login" class="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-r-none p-5 lg:p-10">
            <div class="flex items-center">
              <p
                class="uppercase caption bold text-center lg:text-left m-5 tracking-wider"
              >ingresar a la plataforma</p>
              <svg
                @mouseover="shown=true"
                @mouseleave="shown=false"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                class="hidden lg:block h-6 w-auto svg-inline--fa fa-info-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                />
              </svg>

              <div
                v-if="shown"
                class="bg-blue-900 text-white w-1/2 rounded-lg absolute top-auto right-0 l-50 z-40 p-5"
              >
                <p class="bold">Importante</p>
                <p
                  class="caption text-gray-500"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eum, omnis at facilis delectus quod similique illo nesciunt dolore nihil voluptates explicabo. Doloribus porro, accusantium incidunt voluptate quis totam!</p>
              </div>
            </div>

            <div class="pt-5">
              <form class="p-0">
                <w-input placeholder="Usuario" v-model="usuario" beforeIcon="user"></w-input>
                <w-input placeholder="Contraseña" v-model="contrasenia" beforeIcon="unlock"></w-input>
              </form>

              <router-link to="/" class="underline p-5">Olvido la contraseña?</router-link>
              <div class="flex justify-center">
                <w-btn color="tertiary" class="w-11/12" :dark="true">ingresar</w-btn>
              </div>
              <w-checkbox label="Recordarme" class="p-5"></w-checkbox>
              <p class="caption text-center lg:text-left px-5">
                Aun no eres usuarrio?
                <router-link to="/" class="underline">Obtener una cuenta</router-link>
              </p>
            </div>
          </div>
          <div id="img" class="hidden lg:flex lg:w-1/2">
            <img class="object-cover" src="/img/login.png" alt />
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
      usuario: null,
      contrasenia: null,
      shown: false
    };
  },
  methods: {}
};
</script>

<style>
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
