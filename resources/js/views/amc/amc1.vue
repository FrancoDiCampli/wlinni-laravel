<template>
  <div>
    <div class="bg-gray-200 p-5">
      <div class="bg-white p-5 lg:p-20">
        <h1 class="subtitle-lg body-xs bold">Análisis de Mercado Comparativo (AMC)</h1>
        <p class="caption">Aplicación de analisis de precios</p>
        <p
          class="uppercase text-white primary px-2 my-5 lg:mt-10 w-1/2 lg:w-1/12 rounded-full text-center"
        >01 paso</p>
        <h1 class="subtitle-lg body-xs bold">Completar Formulario</h1>
        <div class="shadow w-full bg-gray-500 rounded-full">
          <div
            class="secondary leading-none text-center text-white rounded-full p-2"
            style="width: 25%"
          ></div>
        </div>

        <!-- Comienzan el formulario  -->

        <div id="form" class="mt-5 lg:flex items-start">
          <form class="w-full lg:pr-10">
            <div class="form-group">
              <label class="caption uppercase bold ml-5">TIPO DE INMUEBLE</label>
              <w-select :options="[1,2]" v-model="select"></w-select>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">TIPO DE OPERACION</label>
              <div class="flex">
                <w-btn class="full-width" color="tertiary" :rounded="true" :dark="true">venta</w-btn>
                <w-btn class="full-width" color="tertiary" :rounded="true" :dark="true">alquiler</w-btn>
              </div>
            </div>

            <div class="form-group mt-5">
              <label class="caption uppercase bold ml-5">DIRECCIÓN</label>
              <w-input></w-input>
            </div>
            <div class="form-group mt-5">
              <label class="caption uppercase bold ml-5">precio</label>
              <w-input></w-input>
            </div>
          </form>

          <form class="w-full lg:pl-10">
            <div class="form-group">
              <label class="caption uppercase bold ml-5">ANTIGUEDAD</label>
              <w-input></w-input>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">HABITACIONES</label>
              <w-input></w-input>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">CUARTO DE SERVICIO</label>
              <w-input></w-input>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">BAÑOS</label>
              <w-input></w-input>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">COCHERAS</label>
              <w-input></w-input>
            </div>
            <div class="form-group">
              <label class="caption uppercase bold ml-5">Zonificación</label>
              <w-input></w-input>
            </div>
          </form>
        </div>

        <!-- Botones  -->
        <div class="lg:w-1/2">
          <label class="caption uppercase bold ml-5">CALIDAD DE CONSTRUCCIÓN</label>
          <div class="flex flex-wrap">
            <button
              class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2"
            >excelente</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">bueno</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">malo</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">regular</button>
          </div>
        </div>

        <div class="lg:w-1/2">
          <label class="caption uppercase bold ml-5">CALIDAD DE ACABADOS</label>
          <div class="flex flex-wrap">
            <button
              class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2"
            >excelente</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">bueno</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">malo</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">regular</button>
          </div>
        </div>
        <div class="lg:w-1/2">
          <label class="caption uppercase bold ml-5">CALIDAD DE CONSERVACIÓN</label>
          <div class="flex flex-wrap">
            <button
              class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2"
            >excelente</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">bueno</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">malo</button>
            <button class="caption w-5/12 p-3 default uppercase text-white rounded-full m-2">regular</button>
          </div>
        </div>
        <!-- end botones  -->

        <div class="lg:flex justify-around mt-10">
          <w-btn class="bold w-full lg:w-1/3" :large="true" :dark="true">GUARDAR CAMBIOS</w-btn>
          <w-btn class="bold w-full lg:w-1/3" :large="true" :dark="true" color="primary">siguiente</w-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null
    };
  }
};
</script>

<style>
</style>
