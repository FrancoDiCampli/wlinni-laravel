<template>
  <div>
    <div class="container">
      <div class="bg-img">
        <div class="contenedor w-11/12 lg:w-10/12 mx-auto flex p-5 lg:p-10">
          <div id="login" class="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-r-none p-5 lg:p-10">
            <p
              class="uppercase caption bold text-center lg:text-left my-5 lg:mt-10"
            >ingresar a la plataforma</p>

            <div class="pt-5">
              <form class="p-0">
                <w-input placeholder="Usuario" v-model="usuario">
                  <w-icon icon="flag" h="20px"></w-icon>
                </w-input>
                <w-input placeholder="Contraseña" v-model="contraseña">
                  <w-icon icon="user-solid" h="12px"></w-icon>
                </w-input>
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
      contraseña: null
    };
  }
};
</script>

<style>
.bn {
  border: 1px solid black;
}
.bg-img {
  background-image: url("/img/banners/3.png");
}
</style>
