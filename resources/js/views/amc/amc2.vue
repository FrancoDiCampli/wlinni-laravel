<template>
  <div>
    <div class="bg-gray-200 p-5">
      <div class="bg-white p-5 lg:p-20">
        <h1 class="subtitle-lg body-xs bold">Análisis de Mercado Comparativo (AMC)</h1>
        <p class="caption">Aplicación de analisis de precios</p>
        <p
          class="uppercase text-white primary px-2 my-5 lg:mt-10 w-1/2 lg:w-1/12 rounded-full text-center"
        >02 paso</p>
        <h1 class="subtitle-lg body-xs bold">Agregar oferta pública</h1>
        <div class="shadow w-full bg-gray-500 rounded-full mb-10">
          <div
            class="secondary leading-none text-center text-white rounded-full p-2"
            style="width: 55%"
          ></div>
        </div>

        <div class="lg:flex white-text">
          <div
            id="publicaciones"
            class="flex w-full justify-between tertiary rounded-lg p-5 lg:mr-2 mb-5"
          >
            <div>
              <h1 class="body bold">Publicaciones seleccionadas (3)</h1>
              <p class="caption">Seleccionadas</p>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="pencil-alt"
                class="h-12 svg-inline--fa fa-pencil-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                />
              </svg>
              <p class="caption mt-5">Editar</p>
            </div>
          </div>
          <div id="ingreso" class="w-full primary rounded-lg p-5 lg:ml-2 mb-5">
            <div class="body bold">Ingeso Manual</div>
            <p class="caption">Insertar datos para el cálculo</p>
            <div></div>
          </div>
        </div>

        <div class="lg:flex justify-around mt-10">
          <w-btn class="bold w-full lg:w-1/3" :large="true" :dark="true" color="primary">siguiente</w-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
