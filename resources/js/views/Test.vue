<template>
  <div class="bg-gray-200 p-10">
    <div class="bg-white w-11/12 mx-auto p-10">
      <div id="container" class="w-10/12">
        <h1 class="title bold">Agregar Publicacion</h1>
        <p class="caption">Agregar la informacion de la nueva publicacion</p>
        <p
          class="accent text-white caption p-5"
        >Configuración flexible y formas de edición, agregue y edite información de listado, fotos y ubicación de la posición</p>

        <div id="tipo">
          <h1>Tipo de Inmueble</h1>
          <form>
            <label for>Tipo de Inmueble</label>
            <w-input label="tipo de inmueble"></w-input>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.container {
  height: 500px;
}
</style>
