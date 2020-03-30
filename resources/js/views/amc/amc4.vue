<template>
  <div>
    <div class="bg-gray-200 p-5">
      <div class="bg-white p-5 lg:p-20">
        <h1 class="subtitle-lg body-xs bold">Análisis de Mercado Comparativo (AMC)</h1>
        <p class="caption">Aplicación de analisis de precios</p>
        <p
          class="uppercase text-white primary px-2 my-5 lg:mt-10 w-1/2 lg:w-1/12 rounded-full text-center"
        >04 paso</p>
        <h1 class="subtitle-lg body-xs bold">Resultado Final</h1>
        <div class="shadow w-full bg-gray-500 rounded-full mb-10">
          <div
            class="secondary leading-none text-center text-white rounded-full p-2"
            style="width: 100%"
          ></div>
        </div>

        <div id="table">
          <!-- ofertas  -->
          <div id="group">
            <h1 class="body bold">OFERTA</h1>

            <div class="lg:flex">
              <div id="t1" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 flex justify-between justify-around p-5 rounded-t-lg lg:rounded-r-none"
                >
                  <p>Dirección</p>
                  <p>Precio</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 rounded-b-lg lg:rounded-r-none"
                >
                  <p>{{ofertas.direccion}}</p>
                  <p>{{ofertas.precio}}</p>
                </div>
              </div>
              <div class="lg:hidden bg-white p-2"></div>
              <div id="t2" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 flex justify-between justify-around p-5 rounded-t-lg lg:rounded-l-none"
                >
                  <p>M2</p>
                  <p>S/m2</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 rounded-b-lg lg:rounded-l-none"
                >
                  <p>{{ofertas.m2}}</p>
                  <p>{{ofertas.pm2}}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- vendidos  -->
          <div id="group">
            <h1 class="body bold UPPERCASE">VENDIDOS</h1>

            <div class="lg:flex">
              <div id="t1" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 flex justify-between justify-around p-5 rounded-t-lg lg:rounded-r-none"
                >
                  <p>Dirección</p>
                  <p>Precio</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 rounded-b-lg lg:rounded-r-none"
                >
                  <p>{{vendidos.direccion}}</p>
                  <p>{{vendidos.precio}}</p>
                </div>
              </div>
              <div class="lg:hidden bg-white p-2"></div>
              <div id="t2" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 flex justify-between justify-around p-5 rounded-t-lg lg:rounded-l-none"
                >
                  <p>M2</p>
                  <p>S/m2</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 rounded-b-lg lg:rounded-l-none"
                >
                  <p>{{vendidos.m2}}</p>
                  <p>{{vendidos.pm2}}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Max y Minimo  -->
          <div id="group" class="pt-10">
            <div class="lg:flex">
              <div id="t1" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 flex justify-between justify-around p-5 rounded-t-lg lg:rounded-r-none"
                >
                  <p class="lg:w-2/12"></p>
                  <p class="hidden lg:block">Máximo</p>
                  <p>Mínimo</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 lg:rounded-r-none"
                >
                  <p>OFERTAS</p>
                  <p class="hidden lg:block">{{ofertas.direccion}}</p>
                  <p>{{ofertas.precio}}</p>
                </div>
                <div
                  class="flex body bg-gray-200 flex justify-between justify-around p-5 rounded-b-lg lg:rounded-r-none"
                >
                  <p>VENDIDOS</p>
                  <p class="hidden lg:block">{{vendidos.direccion}}</p>
                  <p>{{vendidos.precio}}</p>
                </div>
              </div>
              <div class="lg:hidden bg-white p-2"></div>
              <div id="t2" class="lg:w-1/2">
                <div
                  class="flex body bg-gray-300 justify-between lg:justify-around p-5 rounded-t-lg lg:rounded-l-none"
                >
                  <p>Promedio</p>
                  <p>Desviación Estandar</p>
                </div>
                <div
                  class="flex body bg-gray-200 justify-between lg:justify-around p-5 lg:rounded-l-none"
                >
                  <p>{{ofertas.m2}}</p>
                  <p>{{ofertas.pm2}}</p>
                </div>
                <div
                  class="body bg-gray-200 flex justify-between lg:justify-around p-5 rounded-b-lg lg:rounded-l-none"
                >
                  <p>{{vendidos.m2}}</p>
                  <p>{{vendidos.pm2}}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="text-center primary white-text body bold lg:flex justify-between rounded-lg p-5 lg:p-10 mt-10"
          >
            <p>PRECIO SUGERIDO: S/100</p>
            <p>M2:1245</p>
          </div>

          <div class="mt-5">
            <h1 class="caption">OBSERVACIONES</h1>
            <textarea class="bg-gray-300 rounded-lg w-full mt-5" name id rows="10"></textarea>
          </div>
        </div>

        <div class="lg:flex justify-around mt-10">
          <w-btn
            class="bold w-full lg:w-1/3"
            :large="true"
            :dark="true"
            color="secondary"
          >DESCARGAR PDF</w-btn>
          <w-btn
            class="bold w-full lg:w-1/3"
            :large="true"
            :dark="true"
            color="primary"
          >GUARDAR ANÁLISiS</w-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltroInmueble from "./inmuebles/FiltroInmueble";

export default {
  data: () => ({
    filtrar: false,
    ofertas: {
      direccion: "Miraflores",
      precio: 100000,
      m2: 200,
      pm2: 480
    },
    vendidos: {
      direccion: "Miraflores",
      precio: 150000,
      m2: 350,
      pm2: 481
    }
  })
};
</script>
